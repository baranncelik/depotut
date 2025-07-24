const express = require("express");
const router = express.Router();

router.get("/",(req,res) =>{
    res.render("index",{
        title: "Ana Sayfa",
        path : "/index"
    });
});

router.get("/depo9",(req,res) =>{
    res.render("depo9",{
        title: "9 metrekare depo",
        path : "/depo9"
    });
});
router.get("/depo16",(req,res) =>{
    res.render("depo16",{
        title: "16 metrekare depo",
        path : "/depo16"
    });
});

module.exports = router;