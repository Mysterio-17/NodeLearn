const path = require('path');
const express = require ('express')

const userrouter = express.Router()
const rootDir = require("../utils/pathUtils")


userrouter.get("/",(req, res, next)=>{
  res.sendFile(path.join(rootDir,"views", "home.html"));
  
})
module.exports=userrouter;