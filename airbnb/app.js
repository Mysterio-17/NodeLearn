const express = require ('express')

const userrouter = require('./routes/userrouter');
const hostrouter = require('./routes/hostrouter');

const app =express()

app.use((req, res, next)=>{
  console.log(req.url, req.method);
  next();
})
app.use(express.urlencoded);
app.use(userrouter);
app.use(hostrouter);


const PORT = 4000; 
app.listen(PORT, ()=> {
  console.log(`Server runnning on ${PORT}`);
  
})