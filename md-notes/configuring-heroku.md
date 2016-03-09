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

// process.env.PORT lets the port get set by heroku
var port = process.env.PORT || 3000

//
//   __dirname & __filename are a node.js global variables and  
//   are the full filepaths of where the currently executing script 
//   directory & current file  resides  (local to each module)

app.use(express.static( __dirname + '/dist') )

//in all cases send the `index.html`
app.get('/*', function(req, res){
  res.sendFile( __dirname+'/dist/index.html' )
});

app.listen(port, function(){
  console.log('app is running here: http://localhost:' + port)
})
```


#####4- Deploy to Heroku
1. Create App
2. Push to heroku
3. Start the app

```
$ heroku create «my-app-name»
$ git push heroku «optional-alternative-branch:»master
$ heroku ps:scale web=1
```

-- open in the browser:
```
$ heroku open
```