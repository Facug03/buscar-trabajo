import express from 'express'
import axios from 'axios'

const pageRouter = express.Router()

// pruebaRouter.use()

pageRouter.get('/', (req, res) => {
  const { url } = req.query

  axios(url)
    .then((resp) => res.json(resp.data))
    .catch((err) => console.log(err))
})

export default pageRouter
