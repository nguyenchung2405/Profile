import express from "express";
import axios from "axios";
import multer from "multer";
import FormData from "form-data";
import fs from "fs";

const router = express.Router();

var storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    cb(null, true);
    // if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
    //   cb(null, true);
    // } else {
    //   cb(null, false);
    //   return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    // }
  },
});

router.get("/exportation/xlxs", upload.single("file"), async (req, res) => {
  console.log(req)
  const formData = new FormData();
  formData.append("file", fs.readFileSync(req.file.path), req.file.filename);
  try {
    const { data } = await axios.post(
      `${process.env.apiCompetition}/users/exportation/xlxs`,
      formData,
      { headers: formData.getHeaders() }
    );
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});



export default router;
