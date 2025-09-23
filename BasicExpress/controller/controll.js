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
      const hashedPass = await bcrypt.hash(req.body.UserPass, 10);    //hashing user pass with salt
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
        const accessToken = jwt.sign({UserName : info.UserName},{UserRoll:info.UserRoll},process.env.ACCESS_TOKEN);                 //pay load should be object
        res.status(200).json({accessToken : accessToken});
      }
    } catch (e) {
      res.status(500).send(e);
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
