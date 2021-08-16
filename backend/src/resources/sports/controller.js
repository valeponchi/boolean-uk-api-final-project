const { sport } = require('../../utils/dbClient')

async function createOneSport(req, res) {
	const { name, locationId } = req.body
	const newSport = {
		name,
	}
	const createdSport = await sport.create({
		data: {
			...newSport,
			location: { connect: { id: parseInt(locationId) } },
		},
	})
	res.json({ data: createdSport })
}

const getAllSports = async (req, res) => {
	const allSports = await sport.findMany()
	res.json({ data: allSports })
}

const getOneSport = async (req, res) => {
	const { id } = req.params

	const oneSport = await sport.findUnique({
		where: { id: parseInt(id) },
	})
	res.json({ data: oneSport })
}

module.exports = { createOneSport, getOneSport, getAllSports }
