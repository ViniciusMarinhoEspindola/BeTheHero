const crypto = require("crypto");
const conn = require("../database/connection");

const OngController = {
  index: async (req, res) => {
    const ongs = await conn("ongs").select("*");

    res.json(ongs);
  },

  create: async (req, res) => {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await conn("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });
    res.json({ id });
  }
};

module.exports = OngController;
