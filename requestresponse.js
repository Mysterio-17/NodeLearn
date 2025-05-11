const http = require('http');

const server = http.createServer( (req, res) => {
  console.log(req.url, req.method, req.headers);
  if(req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Welcome Home</h1></body>');
  res.write('</html>');
  return res.end();
  }
  else if (req.url === '/products'){
    res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>here are our products</h1></body>');
  res.write('</html>');
  return res.end();
  }
  else{
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Like Video</h1></body>');
  res.write('</html>');
  res.end();
  }
});

const port=3002
server.listen(port,()=>{
  console.log(`Server running on address http://localhost:${port}`);
  
});
