const express = require('express');
const port = 3000;
const app = express();
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/index.html')
})

app.listen(port, ()=>{
    console.log("Listenning at Port:", port)
})