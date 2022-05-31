const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
var path = require('path');
var express = require('express');
var app = express();
const port = process.env.PORT || 5000;
var dir = path.join(__dirname, 'public');



// .... //
// ⇩ urls ⇩ //

app.use(express.static(dir));

app.get('',(red,resp)=>{
    resp.sendFile(`${dir}/index.html`)
});

app.get('/index',(red,resp)=>{
    resp.sendFile(`${dir}/index.html`)
});

app.get('/style',(red,resp)=>{
    resp.sendFile(`${dir}/style.css`)
});



// ^ copy + paste and edit accordingly 
// .... //
// ⇩ 404 page ⇩ //

app.get('*',(red,resp)=>{
    resp.sendFile(`${dir}/404.html`)
});
// .... //







var server = app.listen(port, function(){
    console.log('Server is happening at https://%s', server.address().port);
}); 
