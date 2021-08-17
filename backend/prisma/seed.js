const { PrismaClient } = require('@prisma/client')

const dbClient = new PrismaClient()

// const locations = [
// 	{
// 		title: 'Tokyo 2020',
// 		date: '23 Jul 2021 – 8 Aug 2021',
// 	},
// 	{
// 		title: 'Beijing 2022',
// 		date: '4 Feb 2022 – 20 Feb 2022',
// 	},
// ]

// const sports = [
// 	{
// 		name: 'Athletic',
// 	},
// ]

async function seed() {
	const firstLocation = await dbClient.location.create({
		data: {
			title: 'Tokyo 2020',
			date: '23 Jul 2021 – 8 Aug 2021',
		},
	})

	const secondLocation = await dbClient.location.create({
		data: {
			title: 'Beijing 2022',
			date: '4 Feb 2022 – 20 Feb 2022',
		},
	})

	for (const location of locations) {
		const theLocation = await dbClient.location.create({
			data: location,
		})
		console.log({ theLocation })
	}

	console.log({ firstLocation, secondLocation })
}

seed()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await dbClient.$disconnect()
	})
