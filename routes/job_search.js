const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
    try{
        const pages = parseInt(req.query.page) -1 || 0;
        const limit = parseInt(req.query.limit) || 5;
        const search = req.query.search || "";
        const sort = req.query.sort || "location";
        res.json(posts);
    }catch(err){
        res.status(500).json({ error:true, message: "Internal server error"});
    }
});

module.exports = router;