const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
  console.log("First dummy middleware", req.url , req.method);
  next();
  
})
app.use((req, res, next) => {
  console.log("second dummy middleware", req.url , req.method);
  next();
})
// app.use((req, res, next) => {
//   console.log("third dummy middleware", req.url , req.method);
//   res.send("<h1>WELCOME</h1>")
// })
app.get("/",(req, res, next) =>{
  console.log("handling / for get",req.url,req.method);
  res.send("<h1>WELCOME</h1>")
})
app.get("/contact-us",(req, res, next) =>{
  console.log("handling contact-us for get",req.url,req.method);
  res.send(`
    <h1>pls give your details</h1>
    <form action = "/contact-us" method= "POST">
    <input type ="text" name="name" placeholder ="Enter name"/>
    <input type ="email" name="email" placeholder ="Enter mail_id"/>
    <input type ="Submit"/>

    </form>
    `)
})

app.use(bodyParser.urlencoded());

app.post("/contact-us",(req, res, next)=>{
  console.log("handling contact-us for post",req.url,req.method, req.body);
  res.send("<h1>we'll contact you</h1>")
})
const PORT = 3500
app.listen(PORT, ()=> {
  console.log(`Server runnning on ${PORT}`);
  
})