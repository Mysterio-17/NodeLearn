
const express = require('express');

const app = express();

app.use((req, res, next)=>{
  console.log("first middleware",req.url, req.method);
  next();
})
app.use((req, res, next)=>{
  console.log("second middleware",req.url, req.method);
  res.send("<p>HIIIIIII</p>")
})


const PORT = 3000; 
app.listen(PORT, ()=> {
  console.log(`Server runnning on ${PORT}`);
  
})