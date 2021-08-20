const { athlete } = require('../../utils/dbClient')

const getAllAthletes = async (req, res) => {
	const allAthletes = await athlete.findMany()
	res.json({ data: allAthletes })
}

const getOneAthlete = async (req, res) => {
	const { id } = req.params

	const oneAthlete = await athlete.findUnique({
		where: { id: parseInt(id) },
	})
	res.json({ data: oneAthlete })
}

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
							id: categoryId,
						},
					},
				},
			},
		},
	})
	res.json({ data: createdAthlete })
}

module.exports = { getAllAthletes, getOneAthlete, createOneAthlete }
