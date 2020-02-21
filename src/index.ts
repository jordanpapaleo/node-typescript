import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
console.log(process.env.KEY)

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World! Do you like my hat?'))
app.listen(port, () => console.log(`Listening on port ${port}!`))
