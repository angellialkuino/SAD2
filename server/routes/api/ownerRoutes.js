const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('../../controllers/userController');
const isAuth = require('../../middleware/auth').isAuth;
const multer = require('multer');

//this has search funtionaity ehmm hooow
router.post('/new-staff', controller.createStaff);

router.get('/staff-list', controller.viewStaffList);

router.get('/staff-account', controller.viewUser);

router.delete('/staff-delete', controller.deleteUser);

//upload prof pics

const storageEngine = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, './images');
    },
    filename: (req,file,cb) => {
        cb(null, Date.now()+ 'profpic' + path.extname(file.originalname));
    }
});

const upload = multer({storage: storageEngine});


router.post('/upload-prof-pic', upload.single('prof_pic'), 
(req,res)=>{
    console.log('Successfully Uploaded Photo'); 
    res.send({ message: 'Successfully Uploaded Photo', path: req.file.path});
});

module.exports = router;


