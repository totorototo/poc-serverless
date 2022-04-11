import * as fs from "fs";

module.exports = async (req, res) => {
  try {
    const file = req.query.file;
    if (file) {
      fs.readFile(file, "utf8", (err, data) => {
        if (!err) {
          res.send(data);
        }
      });
    }
  } catch (err) {
    res.send(err); // send the thrown error
  }
};
