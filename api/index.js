import * as fs from "fs";

module.exports = async (req, res) => {
  try {
    const file = req.query.file;
    if (file) {
      const data = fs.readFileSync(file, "utf8");
      if (data) {
        res.status(200).json({
          message: "job done",
        });
      } else {
        res.status(500).json({
          message: "unable to read file",
        });
      }
    }
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
};
