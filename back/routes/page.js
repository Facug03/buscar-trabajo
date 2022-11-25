import express from 'express'
import axios from 'axios'

const pageRouter = express.Router()

// pruebaRouter.use()

pageRouter.get('/', (req, res) => {
  const { url } = req.query

  if (url) {
    axios(url)
      .then((resp) => res.json(resp.data))
      .catch((err) => res.sendStatus(404))
  } else {
    res.sendStatus(400)
  }
})

export default pageRouter
