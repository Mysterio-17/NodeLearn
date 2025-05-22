const path = require('path')
const express = require ('express')

const hostrouter = express.Router()
const rootDir = require("../utils/pathUtils")

hostrouter.get("/add-home",(req, res, next)=>{
   res.sendFile(path.join(rootDir,"views", "addhome.html"));
 
})
hostrouter.post("/add-home",(req, res, next)=>{
   res.sendFile(path.join(rootDir,"views", "addedhome.html"));
})

module.exports = hostrouter;