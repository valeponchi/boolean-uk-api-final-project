const { athlete } = require('../../utils/dbClient')

async function createOneAthlete(req, res) {
	const { firstName, lastName, categoryId, countryId } = req.body
	const newAthlete = {
		firstName,
		lastName,
	}
	const createdAthlete = await athlete.create({
		data: {
			...newAthlete,
			category: { connect: { id: parseInt(categoryId) } },
			country: { connect: { id: parseInt(countryId) } },
		},
	})
	res.json({ data: createdAthlete })
}

module.exports = { createOneAthlete }
