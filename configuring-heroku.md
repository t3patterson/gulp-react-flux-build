#Configuring Heroku

###Heroku
#####1- Install Heroku Toolbelt ( i.e. Heroku CLI )
#####2- Make sure there is `package.json`

`package.json` file needs
  1. proper project dependencies-- easiest to use **express** as webserver (ex: jQuery, lodash, react, react-router, flux, etc...).
  2. the same node version that your local machine runs on in the 'engines' object
  3. The script that will initialze your project

```js
//1
"dependencies": {
    "express": "~4.9.8"
    //and the rest of your dependencies for example
  },
//3
"engines": {
   "node": "5.1.1"
},
//3
"scripts": {
   "start": "node server.js"
},
```

*Note:* To install `"express": "~4.9.8"` as dependency: `npm install express@4.9.8 --save`

#####3- Configure `server.js`
```js
var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {
    // ejs render automatically looks in the views folder
    res.render('index.html');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
```