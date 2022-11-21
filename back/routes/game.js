// import express from 'express'
// import gameModel from '../schemas/game-schema.js'
// import { api } from '../games.js'
// import axios from 'axios'

// const gameRouter = express.Router()

// // pruebaRouter.use()

// gameRouter.get('/', (req, res) => {
//   gameModel
//     .find({})
//     .then((response) => res.json(response))
//     .catch((err) => res.status(404).json({ error: err }))
// })

// gameRouter.get('/trending', (req, res) => {
//   gameModel
//     .find({})
//     .then((response) => res.json(response.splice(0, 5)))
//     .catch((err) => res.status(404).json({ error: err }))
// })

// gameRouter.get('/xd', (req, res) => {
//   axios('https://www.google.com')
//     .then((resp) => res.json(resp.data))
//     .catch((err) => console.log(err))
// })

// gameRouter.get('/:id', (req, res) => {
//   const { id } = req.params

//   gameModel
//     .findById(id)
//     .then((response) => res.json(response))
//     .catch((err) => res.status(404).json({ error: err }))
// })

// gameRouter.post('/', (req, res) => {
//   const { game } = req.body

//   if (!game.name) return res.status(404).send()

//   const newUser = new gameModel(game)

//   newUser.save().then((saveUser) => res.json(saveUser))
// })

// gameRouter.post('/muchos', (req, res) => {
//   // const { game } = req.body

//   // if (!game.name) return res.status(404).send()
//   gameModel.create(api).then((response) => res.json(response))

//   // newUser.save().then((saveUser) => res.json(saveUser))
// })

// export default gameRouter
