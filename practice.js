const http= require('http');

const server = http.createServer((req,res)=>{
  console.log(req.url, req.method);
  if(req.url === '/Home') {
    res.write('<h1>Welcome to home</h1>')
    return res.end();
  }
   if(req.url === '/Men') {
    res.write('<h1>Welcome to men</h1>')
    return res.end();
  } if(req.url === '/Women') {
    res.write('<h1>Welcome to women</h1>')
    return res.end();
  } if(req.url === '/Kids') {
    res.write('<h1>Welcome to kids</h1>')
    return res.end();
  } if(req.url === '/Cart') {
    res.write('<h1>Welcome to cart</h1>')
    return res.end();
  }

  res.write(`
<html lang="en">
<head>

  <title>Myntra</title>
</head>
<body>
  <head>
    <nav>
      <ul>
        <li> <a href="/Home">Home</a></li>
        <li> <a href="/Men">MEN</a></li>
       <li> <a href="/Women">Women</a></li>
        <li> <a href="/Kids">Kids</a></li>
      <li> <a href="/Cart">cart</a></li>
      </ul>
    </nav>
  </head>
</body>
</html>
  
  `);
  res.end();
  
});

server.listen(3003,()=>{
  console.log(`server is running ${3003}`)
})