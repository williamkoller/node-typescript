import express from 'express'
import morgan from 'morgan'
import route from './routes/routes'
import bodyParser from 'body-parser'

const port = 3333
const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(route)
app.listen(port, () => {
	console.log(`Application running on http://localhost:${port}`)
})

export default app
