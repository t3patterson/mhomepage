require('dotenv').config({ path: 'variables.env' })


//IMPORTS
//import webpack + webpack middleware;
const chalk = require('chalk')

const	bodyParser = require('body-parser')
const express = require('express') //import express web server
const renderFile = require('ejs').renderFile //import view templating engine
const connectToDB = require('./src/db/db-connect.js') //connect to db

const indexRouter = require('./src/routes/indexRouter.js')
const apiRouter = require('./src/routes/apiRouter.js')

const { render404 } = require('./src/helpers/errorHandlers')

// =========
// RUN APP
// =========
const app = express()


//configure bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




// set port if exists in environment for heroku or live site, else set to 3000 for dev
app.set('port', process.env.PORT)


//CONFIGURING TEMPLATING ENGINE FOR .HTML
//-----------------------
app.set('views', './src/views');
app.engine('ejs', renderFile)
app.set('view engine', 'ejs');

// CONFIGURING STATIC FILES  (js, css, images)
// ------------------------------
// js, css, and imafiles from dist/assets/
app.use( express.static( `${__dirname}/dist`) );


// ------------------------------
// Wire up the router
// ------------------------------
app.use('/', indexRouter)
app.use('/api', apiRouter)


app.use(render404)

//---------------------
//EXECUTION SCRIPTS
//---------------------
//Connect to DB
connectToDB(process.env.DATABASE_URL)

//Tell Server to listen @ port-location
app.listen(process.env.PORT, function() {
	console.log(chalk.bold.bgGreen(` App listening on http://localhost:${process.env.PORT} `))
})
