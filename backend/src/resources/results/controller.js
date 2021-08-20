const { result } = require('../../utils/dbClient')

const getAllResults = async (req, res) => {
	const allResults = await result.findMany()
	res.json({ data: allResults })
}

const getOneResult = async (req, res) => {
	const { id } = req.params
	const oneResult = await result.findUnique({
		where: { id: parseInt(id) },
	})
	res.json({ data: oneResult })
}

const deleteResult = async (req, res) => {
	const id = parseInt(req.params.id)

	const deletedResult = await result.delete({
		where: { id },
	})
	res.json({ data: deletedResult })
}

const searchingResult = async (req, res) => {
	const { location, sports, category } = req.query
	console.log(location, sports, category)

	// 	// where: { location: { title: { contains: location } } },
	// 	const requestedResult = await result.findFirst({
	// 		where: {
	// 			category: {
	// 				is: {
	// 					name: category,
	// 				},
	// 				category: {
	// 					is: {
	// 						sport: {
	// 							is: {
	// 								name: sports,
	// 							},
	// 						},
	// 					},
	// 				},
	// 			},
	// 		},
	// 	})

	const requestedResult = await result.findMany({
		// WHERE is when the filtering happens
		where: { category: { name: { contains: category } } },

		//include is for the RESPONSE !!!
		include: {
			goldAthlete: true,
			silverAthlete: true,
			bronzeAthlete: true,
			category: {
				select: {
					name: true,
					sport: {
						select: {
							name: true,
							location: {
								select: { title: true },
							},
						},
					},
				},
			},
		},
	})
	res.json({ requestedResult })
}

// async function createOneResult(req, res) {
// 	const { categoryId, goldAthleteId,
//     silverAthleteId,
//     bronzeAthleteId } = req.body
// 	const newResult = {
// 		categoryId, goldAthleteId,
//     silverAthleteId,
//     bronzeAthleteId
// 	}

// 	const createdResult = await result.create({
// 		data: {
// 			...newResult,
// 			country: { connect: { id: parseInt(countryId) } },
// 			categories: {
// 				create: {
// 					categories: {
// 						connect: {
// 							id: categoryId,
// 						},
// 					},
// 				},
// 			},
// 		},
// 	})
// 	res.json({ data: createdResult })
// }

module.exports = { getAllResults, getOneResult, deleteResult, searchingResult }
