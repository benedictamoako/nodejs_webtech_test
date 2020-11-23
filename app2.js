//import express library
var express = require('express');

//create instance of the module
var app = express();

var fetch = require('node-fetch');

//setup templating engine
app.set('view engine', 'ejs');

app.use(express.static('public'));

//create a page using a route
app.get('/', (request, response) => {
    response.render("index2.ejs", {
        
    });
});

app.get('/about', (request, response) => {
    response.render("about.ejs", {
        
    });
});

app.get('/contact', (request, response) => {
    response.render("contact.ejs", {
        
    });
});

app.get('/gallery', (request, response) => {
    response.render("gallery.ejs", {
        
    });
});

app.get('/reviews', (request, response) => {
    response.render("reviews.ejs", {
        
    });
});

app.get('/team', (request, response) => {
    response.render("team.ejs", {
        
    });
});

app.get('/users', (request, response)=> {
    
    fetch('https://randomuser.me/api/?results=50')
    .then(val=>val.json())
    .then(val=> {
        response.render('users.ejs',{

            "users" : val.results
        });
    })

});

//listen to the server
app.listen(8080, () => {
    console.log('Server started......');
});