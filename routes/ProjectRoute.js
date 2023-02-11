const express = require('express');
// const multer = require('multer');
// const path = require('path');

const {
  Create,
  FindAll,
  getPhotoImage,
  Delete,
  getById,
  GetAll,
  Update,
} = require('../controllers/ProjectController.js');

const router = express.Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './images');
//   },
//   filename: (req, file, cb) => {
//     cb(null, req.body.fileName + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

// router.post('/v1/api/projects', upload.single('image'), Create);
// router.get('/v1/api/project', FindAll);
router.post('/v1/api/projects', Create);
router.get('/v1/api/projects', GetAll);
router.get('/v1/api/projects/:id', getById);
router.patch('/v1/api/projects/:id', Update);
router.delete('/v1/api/projects/:id', Delete);
router.get('/v1/api/projects/photoImage/:path', getPhotoImage);

module.exports = router;
