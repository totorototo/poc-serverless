import * as fs from "fs";

module.exports = async (req, res) => {
  try {
    const file = req.query.file;
    if (file) {
      fs.readFile(file, "utf8", (err, data) => {
        if (!err) {
          res.status(200).json({
            message: "job done",
          });
        }
      });
    } else {
      res.status(500).json({
        message: "internal server error: file not found!",
      });
    }
  } catch (err) {
    res.send(err); // send the thrown error
  }
};
