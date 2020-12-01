//import express library
var express = require('express');

//lowdb database library
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

//defults for the lowdb values
// Set some defaults (required if your JSON file is empty)
db.defaults({ clients: [], })
    .write()

//create instance of the module
var app = express();

var fetch = require('node-fetch');
const { response } = require('express');
const { RequestTimeout } = require('http-errors');

//setup templating engine
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//create a page using a route
app.get('/', (request, response) => {
    response.render("index2.ejs", {

    });
});

app.post('/', (request, response) => {
    // response.render("index2.ejs", {

    // });
    response.send("Hello: " + request.body.fName)
});

app.get('/registration', (request, response) => {
    response.render("registration.ejs", {

    });
});

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}



app.post('/registration', (request, response) => {
    //validate email
    if (validateEmail(request.body.email) == false) {
        response.send("Invalid email format");
        return;
    }

    //validate password
    if (request.body.password1 != request.body.password2) {
        response.send("Passwords do not match");
        return;
    }

    // Add a cleint
    db.get('clients')
        .push({ 
            Firstname: request.body.Firstname, 
            Lastname: request.body.Lastname,
            email: request.body.email,
            password: request.body.password1,
            Date: new Date()
            })
        .write()
        response.render("login.ejs", {

        })
});

app.get('/login', (request, response) => {
    response.render("login.ejs", {

    })
});

app.post('/login', (request, response) => {
    var dbEmail = db.get('clients')
        .find({email: request.body.loginEmail})
        .value();

    var dbPassword =  db.get('clients')
        .find({password: request.body.loginPassword})
        .value();

    if(dbEmail && dbPassword){
        response.send("Welcome " + dbEmail.Firstname);
    } else {
        response.send("Invalid Email or Password");
        return;
    }
    
})

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

app.get('/users', (request, response) => {

    fetch('https://randomuser.me/api/?results=50')
        .then(val => val.json())
        .then(val => {
            response.render('users.ejs', {

                "users": val.results
            });
        })

});

//listen to the server
app.listen(process.eventNames.PORT || 8080, () => {
    console.log('Server started......');
});