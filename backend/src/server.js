const express = require('express')
const morgan = require('morgan')

const app = express()

// ROUTERS

// const sportsRouter = require('./resources/sports/router')
const locationRouter = require('./resources/locations/router')

// MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json())

// ROUTES
// app.use('/sports', sportsRouter)
app.use('/locations', locationRouter)

app.get('*', (req, res) => {
	res.status(404).json({ msg: 'No route is matching your request..' })
})

//CONNECT THE SERVER
app.listen(4000, () => {
	console.log('The server is connected!')
})
