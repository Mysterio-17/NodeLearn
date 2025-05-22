const path = require('path');
const express = require ('express')

const userrouter = require('./routes/userrouter');
const hostrouter = require('./routes/hostrouter');
const rootDir = require("./utils/pathUtils")

const app =express()

app.use(express.urlencoded);
app.use(userrouter);
app.use("/host",hostrouter);

app.use((req,res,next)=>{
 res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})
const PORT = 3200; 
app.listen(PORT, ()=> {
  console.log(`Server runnning on ${PORT}`);
  
})