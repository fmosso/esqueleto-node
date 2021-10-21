
import express from 'express'

import router from './router'
const app = express()
const port = 3000

app.use(express.json())
app.use(router)

const server = app.listen(port, () => {
  console.log(`skeleton api rest at http://localhost:${port}`)
})

export default server