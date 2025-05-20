const express = require ('express')

const hostrouter = express.Router()

app.get("/host/add-home",(req, res, next)=>{
  res.send(
    `<h1> Register your home </h1>
    <form action = "/add-home" method= "POST">
    <input type ="text" name="Housename" placeholder ="Enter name"/>
    <input type ="Submit"/>

    </form>
    `)
  
})
app.post("/host/add-home",(req, res, next)=>{
  res.send(
    `<h1> Home Registered Succesfully </h1>
    <a href= "/">GO TO HOME</a>
    `)
  
})

module.exports = hostrouter;