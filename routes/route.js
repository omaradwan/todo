

const express=require('express')
const router=express.Router();

const listControllers=require("../controllers/main.js");

router.get('/getAllList',listControllers.getAll);
router.get('/deleteFromList/:id',listControllers.deleteOne)
router.post('/addToList',listControllers.AddOne);

module.exports=router;

