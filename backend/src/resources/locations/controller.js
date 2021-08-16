const { location } = require('../../utils/dbClient')

// CREATE ONE OLYMPIC LOCATION
async function createOneLocation(req, res) {
	const { title, date } = req.body

	const newLocation = {
		title,
		date,
	}
	const createdLocation = await location.create({ data: newLocation })
	res.json({ createdLocation })
}

const getAllLocations = async (req, res) => {
	const allLocations = await location.findMany()
	res.json({ data: allLocations })
}

const getOneLocation = async (req, res) => {
	const { id } = req.params

	const oneLocation = await location.findUnique({
		where: { id: parseInt(id) },
	})
	res.json({ data: oneLocation })
}

module.exports = { createOneLocation, getAllLocations, getOneLocation }
