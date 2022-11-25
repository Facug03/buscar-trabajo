import express from 'express'
import cors from 'cors'

import pageRouter from './routes/page.js'

const PORT = 3001
const expressApp = express()

expressApp.use(express.json())
expressApp.use(cors({ origin: true, credentials: true }))

expressApp.use('/page', pageRouter)

expressApp.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
})
