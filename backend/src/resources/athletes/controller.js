const { athlete, sport } = require('../../utils/dbClient')

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

async function createMultiAthletes(req, res) {
  const { categoryId, athletes } = req.body
  // { firstName, lastName, sex, countryId } = athletes[]
  const filteredAthletes = athletes.filter(athlete => athlete.firstName !== "")
  try {
    filteredAthletes.map(async newAthlete => {
      const { firstName, lastName, sex, countryId } = newAthlete
      const createdAthlete = await athlete.create({
        data: {
          firstName: firstName,
          lastName: lastName,
          sex: sex,
          country: { connect: { id: parseInt(countryId) } },
          categories: {
            create: [
              {
                categories: {
                  connect: {
                    id: parseInt(categoryId),
                  },
                },
              },
            ],
          },
        },
      })
      res.json({ data: createdAthlete })
    })
  } catch (error) {
    res.json(error => error.message)
  }
}

module.exports = {
  getAllAthletes,
  getOneAthlete,
  createOneAthlete,
  createMultiAthletes,
}

