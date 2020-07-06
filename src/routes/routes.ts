import express from 'express'

const route = express.Router()

route.use('/', (request, response) => {
	try {
		const res = {
			name: 'William Koller',
			techs: 'Typescript',
			age: 31,
		}
		return response.status(200).json(res)
	} catch (error) {
		response.status(500).json(error)
	}
})

export default route
