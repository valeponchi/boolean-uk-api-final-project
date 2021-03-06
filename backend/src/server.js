const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
require("dotenv").config()

const app = express()

// ROUTERS



// const resultsRouter = require('./resources/results/router')

const athleteRouter = require('./resources/athletes/router')
const categoriesRouter = require('./resources/categories/router')
const countriesRouter = require('./resources/countries/router')
const locationRouter = require('./resources/locations/router')
const sportsRouter = require('./resources/sports/router')
const resultsRouter = require('./resources/results/router')


// MIDDLEWARES
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())

// ROUTES

app.use('/athletes', athleteRouter)
app.use('/categories', categoriesRouter)
app.use('/countries', countriesRouter)
app.use('/locations', locationRouter)
app.use('/sports', sportsRouter)
app.use('/results', resultsRouter)

// app.use('/results', resultsRouter)

app.get("*", (req, res) => {
  res.status(404).json({ msg: "No route is matching your request.." })
})

//CONNECT THE SERVER
app.listen(4000, () => {
  console.log("The server is connected!")
})
