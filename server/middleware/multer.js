const multer = require("multer");

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const mimeTypes = [
      "image/jpg",
      "image/jpeg",
      "image/png",
      "image/webp",
      "application/pdf",
    ];
    if (mimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid mime type"), false);
    }
  },
});

module.exports = upload;
