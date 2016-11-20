var express = require('express');

var app = express();

var port = 5000;
app.use(express.static('public'));
app.use(express.static('src/views'));
app.get('/',function(req,res){
    res.send('hiiiiii');
});

app.listen(port,function(error){
    console.log('server running on port 5000');
});