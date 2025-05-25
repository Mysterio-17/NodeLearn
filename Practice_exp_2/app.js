const path = require('path')
const express = require('express');
const homeRouter = require('./routes/homeRouter')
const contactRouter = require('./routes/contactRouter')
const app = express();

app.use(homeRouter)
app.use(contactRouter)


const PORT = 3000
app.listen(PORT, ()=> {
  console.log(`Server runnning on ${PORT}`);
  
})