#Setup
Some setup instructions for this simple build. 
**v001**: Pure client-side routing | [Catalogue of issues and improvements](./md-notes/issues-and-improvements.md)

##Configuration NOTE: Make sure that gulp program can be accessed
1) set `npm` prefix: `$ npm config set prefix /usr/local`
2) set `$ npm install gulp -g`
3) 

####Base Case (component rendering and React routing)
1. Clone the repo and set the url to your own remote repository
2. `$ npm install` the package.json
3. Run the gulp task-runner in terminal `$ gulp` to compile css and js
4. Test to see if home-page and about-page components are working at *localhost:3000*

####API Module
1) Configure `_API.js` module to your database, and see if you can fetch data. *Firebase* is the current default backend

2) Execute the other methods in `_API.js` with dummy data
  - `getAll`
  - `getSingle`
  - `create`
  - `update`
  - `destroy`

####Deployment Notes
`server.js` file contains the script for the node-server to run. I currently have it configured using *express.js* server framework.
