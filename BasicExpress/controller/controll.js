import schem from "../models/Schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export default {
  home: (req, res) => res.status(200).send("Hello World"),

  user: (req, res) => res.status(200).send(`hello, ${req.params.name}`),

  addUser: async (req, res) => {
    try {
      const hashedPass = await bcrypt.hash(req.body.UserPass, 10); //hashing user pass with salt
      const userInfo = new schem({ ...req.body, UserPass: hashedPass });
      await userInfo.save();
      res.status(201).send(userInfo);
    } catch {
      res.status(500).send();
    }
  },

  get: async (req, res) => {
    const info = await schem.find();
    res.status(200).send(info);
  },

  signin: async (req, res) => {
    const info = req.body;
    try {
      const found = await schem.findOne({ UserId: info.UserId });
      if (found == null) res.status(404).send("user not found");
      if (await bcrypt.compare(req.body.UserPass, found.UserPass)) {
        const auth = jwt.sign(
          { UserName: found.UserName, Role: found.Role },
          process.env.ACCESS_TOKEN,
          { expiresIn: "1h" }
        ); //pay load should be object
        res.status(200).json({ Authentication: auth });
      } else {
        res.status(401).send("Incorrect password");
      }
    } catch (e) {
      res.status(500).send(e);
    }
  },

  update: async (req, res) => {
    try {
      const updates = {
        UserName: req.body.UserName,
        Role: req.body.Role,
      };

      if (req.body.UserPass) {
        updates.UserPass = await bcrypt.hash(req.body.UserPass, 10);
      }

      const updatedDoc = await schem.findOneAndUpdate(
        { UserId: Number(req.body.UserId) },
        updates,
        { new: true, runValidators: true }
      );
      if (updatedDoc) res.status(200).send("updated successfully");
      else res.status(404).send("user not found");
    } catch (err) {
      res.status(500).send("server error");
    }
  },

  delete: async (req, res) => {
    try {
      const del = req.params.UserId;
      const result = await schem.deleteOne({ UserId: del });

      if (result.deletedCount > 0) {
        res.status(200).send("Deletion Success ✅");
      } else {
        res.status(404).send("Deletion Failed ❌");
      }
    } catch (err) {
      res.status(500).send("Server Error ⚠️");
    }
  },
};
