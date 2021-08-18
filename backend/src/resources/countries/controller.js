const { country } = require('../../utils/dbClient')

// CREATE ONE OLYMPIC LOCATION
async function createOneCountry(req, res) {
	const { name } = req.body
	const newCountry = {
		name,
	}

	try {
		const createdCountry = await country.create({ data: newCountry })
		res.json({ createdCountry })
	} catch (error) {
		res.json({ error: error.message })
	}
}

const getOneCountry = async (req, res) => {
	const { id } = req.params

	const oneCountry = await country.findUnique({
		where: { id: parseInt(id) },
	})
	res.json({ data: oneCountry })
}

const getAllCountries = async (req, res) => {
	const allCountries = await country.findMany()
	res.json({ data: allCountries })
}

const deleteCountry = async (req, res) => {
	const id = parseInt(req.params.id)

	const deletedCountry = await country.delete({
		where: { id },
	})
	res.json({ data: deletedCountry })
}

module.exports = {
	createOneCountry,
	getOneCountry,
	getAllCountries,
	deleteCountry,
}
