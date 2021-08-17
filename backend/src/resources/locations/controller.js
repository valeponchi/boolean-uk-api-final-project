const { location } = require('../../utils/dbClient')

// CREATE ONE OLYMPIC LOCATION
async function createOneLocation(req, res) {
	const { title, date } = req.body
	const newLocation = {
		title,
		date,
	}

	try {
		const createdLocation = await location.create({ data: newLocation })
		res.json({ createdLocation })
	} catch (error) {
		res.json({ error: error.message })
	}
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

const deleteLocation = async (req, res) => {
	const id = parseInt(req.params.id)

	const deletedLocation = await location.delete({
		where: { id },
	})
	res.json({ data: deletedLocation })
}

async function updateALocation(req, res) {
	const undatedKeys = req.body
	const locationId = Number(req.params.id)

	try {
		const foundLocation = location.findUnique({
			where: {
				id: locationId,
			},
		})
		if (foundLocation) {
			const updatedLocation = await location.update({
				where: {
					id: locationId,
				},
				data: {
					...foundLocation,
					...undatedKeys,
				},
			})
			res.json({ updated: updatedLocation })
			// .then(updated => {
			// 	res.json({ updated })
			// })
		} else {
			res.json({ msg: `An olympic location with id n.${bookId} doesn't exist` })
		}
	} catch (error) {
		res.json(error => {
			error.message
		})
	}
}

module.exports = {
	createOneLocation,
	getAllLocations,
	getOneLocation,
	deleteLocation,
	updateALocation,
}
