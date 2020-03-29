const conn = require("../database/connection");

const SessionController = {
  create: async (req, res) => {
    const { id } = req.body;

    const ong = await conn("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!ong)
      return res.status(400).json({ error: "No ONG found with this ID" });

    return res.json(ong);
  }
};

module.exports = SessionController;
