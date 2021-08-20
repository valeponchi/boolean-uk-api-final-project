const { PrismaClient } = require('@prisma/client')

const dbClient = new PrismaClient()

const locations = [
	{
		title: 'Tokyo 2020',
		date: '23 Jul 2021 – 8 Aug 2021',
	},
	{
		title: 'Beijing 2022',
		date: '4 Feb 2022 – 20 Feb 2022',
	},
]

const countries = [
	{ name: 'Italy', code: 'IT' },
	{ name: 'Great Britain', code: 'GB' },
	{ name: 'Namibia', code: 'NA' },
	{ name: 'Jamaica', code: 'JM' },
	{ name: 'United States of America', code: 'US' },
	{ name: 'Canada', code: 'CA' },
	{ name: 'Australia', code: 'AU' },
	{ name: 'China', code: 'CN' },
]

const sports = [
	{ name: 'Athletic', locationId: 1 },
	{ name: 'Swimming', locationId: 1 },
]

const categories = [
	{ name: '100mt Women', sportId: 1 },
	{ name: '200mt Women', sportId: 1 },
	{ name: '800mt Women', sportId: 1 },
	{ name: '200mt Women Butterfly', sportId: 2 },
	{ name: '400mt Women Freestyle', sportId: 2 },
]

const athletes = [
	{
		firstName: 'Elaine',
		lastName: 'Thompson-Herah',
		sex: 'F',
		countryId: 4,
	},
	{
		firstName: 'Shelly-Ann',
		lastName: 'Fraser-Pryce',
		sex: 'F',
		countryId: 4,
	},
	{
		firstName: 'Shericka',
		lastName: 'Jackson',
		sex: 'F',
		countryId: 4,
	},
	{
		firstName: 'Christine',
		lastName: 'Mbomba',
		sex: 'F',
		countryId: 3,
	},
	{
		firstName: 'Gabrielle',
		lastName: 'Thomas',
		sex: 'F',
		countryId: 5,
	},
	{
		firstName: 'Athing',
		lastName: 'Mu',
		sex: 'F',
		countryId: 5,
	},
	{
		firstName: 'Keely',
		lastName: 'Hodgkinson',
		sex: 'F',
		countryId: 2,
	},
	{
		firstName: 'Raevyn',
		lastName: 'Rogers',
		sex: 'F',
		countryId: 5,
	},
]

const results = [
	{
		categoryId: 1,
		goldAthleteId: 1,
		silverAthleteId: 2,
		bronzeAthleteId: 3,
	},
	{
		categoryId: 2,
		goldAthleteId: 1,
		silverAthleteId: 4,
		bronzeAthleteId: 5,
	},
	{
		categoryId: 3,
		goldAthleteId: 6,
		silverAthleteId: 7,
		bronzeAthleteId: 8,
	},
]

async function seed() {
	//THE ORDER THEY ARE MATTERS !!
	//LOCATIONS
	for (const location of locations) {
		const theLocation = await dbClient.location.create({
			data: location,
		})
		console.log({ theLocation })
	}

	//COUNTRY
	for (const country of countries) {
		const theCountry = await dbClient.country.create({
			data: country,
		})
		console.log({ theCountry })
	}

	//SPORTS
	for (const sport of sports) {
		const theSport = await dbClient.sport.create({
			data: sport,
		})
		console.log({ theSport })
	}

	//CATEGORIES
	for (const category of categories) {
		const theCategory = await dbClient.category.create({
			data: category,
		})
		console.log({ theCategory })
	}

	//ATHLETES
	for (const athlete of athletes) {
		const theAthlete = await dbClient.athlete.create({
			data: athlete,
		})
		console.log({ theAthlete })
	}

	//RESULTS
	for (const result of results) {
		const theResult = await dbClient.result.create({
			data: result,
		})
		console.log({ theResult })
	}
}

seed()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await dbClient.$disconnect()
	})

// const firstLocation = await dbClient.location.create({
// 	data: {
// 		title: 'Tokyo 2020',
// 		date: '23 Jul 2021 – 8 Aug 2021',
// 	},
// })

// const secondLocation = await dbClient.location.create({
// 	data: {
// 		title: 'Beijing 2022',
// 		date: '4 Feb 2022 – 20 Feb 2022',
// 	},
// })
