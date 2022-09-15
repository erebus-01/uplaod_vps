const express = require('express');
const route = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
})
const upload = multer({storage: storage});


route.get('/', (req,res) => {
  res.render('import')
})
route.post("/upload", upload.single("data"), (req, res) => {
  if(!req.file) {
    res.status(500).send({
      ok: false,
      err: "Da chon file upload dau ???"
    })
  }
})


module.exports = route;