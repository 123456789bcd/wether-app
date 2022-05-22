const express = require("express")
const app = express()
const path = require("path")
const weatherapi = require("../weather/weatherapi")

//Ipmortant 
app.use(express.json())

const htmlPath = path.join(__dirname, "../Public")
    // console.log(htmlPath);
app.use(express.static(htmlPath))

app.post('/search', weatherapi)





app.listen(4000, () => {
    console.log('server is running on port 4000');
})















// const http = require('http');
// const bodyParser = require('body-parser')


// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     console.log(req.url);
//     res.write(req.url);
//     res.end();
//   }).listen(8000);