const fs = require('fs');
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 7000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
})

const upload = multer({storage: storage});

app.post("/upload", upload.single("data"), (req, res) => {
  if(!req.file) {
    res.status(500).send({
      ok: false,
      err: "Da chon file upload dau ???"
    })
  }
  res.send(req.file)
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))