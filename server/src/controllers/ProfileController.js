const conn = require("../database/connection");

const ProfileController = {
  index: async (req, res) => {
    const ong_id = req.headers.authorization;

    const incidents = await conn("incidents")
      .where("ong_id", ong_id)
      .select("*");

    return res.json(incidents);
  }
};

module.exports = ProfileController;
