const http = require('http');
const fs=require('fs')

const server = http.createServer( (req, res) => {
  console.log(req.url,req.method);
  
   if(req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Enter Your details</h1><br>');
    res.write('<form action="/submit-details" method="POST">');
  res.write('<input type ="text" name="username" placeholder="username"><br>');
  res.write('<label for="male">Male</label>')
  res.write('<input type="radio" id="male" name="gender" value="male">')
  res.write('<label for="female">FeMale</label>')
    res.write('<input type="radio" id="female" name="gender" value="female">')
    res.write('<input type="submit" value="Submit">')
  res.write('</form>')

  res.write('</body>');
  res.write('</html>');
  return res.end();
  }
  else if (req.url.toLowerCase() === "/submit-details" && req.method=== "POST"){
    const body = [];
    req.on('data', (chunk) =>{
         console.log(chunk);
        body.push(chunk);
    });
    req.on('end', ()=>{
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
     const params= new URLSearchParams(fullBody);
    //  const BodyObject = {};
    //  for(const[key, val] of params.entries()){
    //   BodyObject[key] = val;
    //  }
    const BodyObject = Object.fromEntries(params)
     console.log(BodyObject);
     
    })
  }
  });

  
const port=4000
server.listen(port,()=>{
  console.log(`Server running on address http://localhost:${port}`);
  
});
