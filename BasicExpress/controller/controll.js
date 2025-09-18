import schem from "../models/Schema.js";
export default {
  home: (req, res) => res.status(200).send("Hello World"),

  user: (req, res) => res.status(200).send(`hello, ${req.params.name}`),

  addUser: async (req, res) => {
    const userInfo = new schem({ ...req.body });
    await userInfo.save();
    res.status(201).send(userInfo);
  },

  get: async (req, res) => {
    const info = await schem.find();
    res.status(200).send(info);
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
