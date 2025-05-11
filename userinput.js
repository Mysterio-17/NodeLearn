const http = require('http');

const server = http.createServer( (req, res) => {
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
  });

  
const port=3002
server.listen(port,()=>{
  console.log(`Server running on address http://localhost:${port}`);
  
});
