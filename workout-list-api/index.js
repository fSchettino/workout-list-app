import express from 'express'
import bodyParser from 'body-parser'
import routes from './config/routes'
import cors from 'cors'

const app = express()
const corsOptions = {
    origin: '*'
}

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api',cors(corsOptions), routes)


app.get('/', (req, res) =>  res.send('Workout List API listening on port 8000'))
    

const server = app.listen(process.env.PORT || 8000, () => {
    console.log(`http://localhost:${server.address().port}`)
})


export default app