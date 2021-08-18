const { athlete } = require('../../utils/dbClient')

async function createOneAthlete(req, res) {
	const { firstName, lastName, sex, countryId, categoryId } = req.body
	const newAthlete = {
		firstName,
		lastName,
		sex,
	}
	const createdAthlete = await athlete.create({
		data: {
			...newAthlete,
			country: { connect: { id: parseInt(countryId) } },
			categories: {
				create: {
					categories: {
						connect: {
							id: 1,
						},
					},
				},
			},
		},
	})
	res.json({ data: createdAthlete })
}

module.exports = { createOneAthlete }
