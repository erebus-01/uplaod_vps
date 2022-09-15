const fs = require('fs');
const YAML = require('js-yaml');
const express = require('express');
const multer = require('multer');

const app = express();
const PORT = 7000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload");
  },
  file: (req, file, cb) => {
    cb(null, file.originalname + "_" + Date.now());
  },      
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) { 
      return cb(new Error('Please upload a Image'))
    }
    cb(undefined, true)
  }
})

const upload = multer({storage: storage});

app.post("/upload", upload.single("data"), (req, res) => {
  // if(req.file) {
  //   try{
  //     const raw = fs.readFileSync(`upload/${req.file.filename}`);
  //     console.log(raw);
  //   }
  //   catch(err) {  
  //     console.log(err);
  //     res.status(500).send({
  //       ok: false,
  //       err: "Dang bi loi roi nhe!!!"
  //     })
  //   }
  // }
  // else{
  //   res.status(400).send({
  //     ok: true,
  //     err: "Da chon file upload dau ???"
  //   })
  // }\
  res.send(req.file)
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))