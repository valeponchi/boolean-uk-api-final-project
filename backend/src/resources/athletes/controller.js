const { athlete, sport } = require("../../utils/dbClient")

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
  const { locationId, sportId, categoryId, athletes } = req.body
  // const { firstName, lastName, sex, countryId } = athletes
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

          // categories: {
          //   create: [
          //     {
          //       categories: {
          //         connect: {
          //           id: parseInt(categoryId),
          //         },
          //       },
          //     },
          //   ],
          categories: {
            //categories: categoriesOnAthletes[]
            create: [
              {
                categories: {
                  connect: {
                    id: parseInt(categoryId),
                  },
                  connect: {
                    sport: {
                      connect: {
                        id: parseInt(sportId),
                      },
                      connect: {
                        location: { connect: { id: parseInt(locationId) } },
                      },
                    },
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

module.exports = { createOneAthlete, createMultiAthletes }
