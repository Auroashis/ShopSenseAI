
const express = require('express');

const router = express.Router();
const bodyparser = require('body-parser');
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: true }));



const web_data = require('./shop');



router.get('/api/web_data',async (req,res)=>{
    res.status(200).send(web_data);
    console.log(web_data);
})

module.exports = router;