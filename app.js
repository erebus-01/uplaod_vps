const fs = require('fs');
const express = require('express');
const multer = require('multer');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const Route = require('./routes/route')

const app = express();
const PORT = 7000;

app.use('/', express.static('assets'))
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "upload");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// })

// const upload = multer({storage: storage});

app.use('/', require('./routes/route'))

// app.post("/upload", upload.single("data"), (req, res) => {
//   if(!req.file) {
//     res.status(500).send({
//       ok: false,
//       err: "Da chon file upload dau ???"
//     })
//   }
// })

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))