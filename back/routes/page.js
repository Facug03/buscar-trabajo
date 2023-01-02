import express from 'express'
import axios from 'axios'

const pageRouter = express.Router()

// pruebaRouter.use()

pageRouter.get('/', (req, res) => {
  axios(
    'https://api.brawlstars.com/v1/players/%23GRCJCL02?authorization=Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImQ5ODVlZmU3LWVlNmMtNGZkOS1iOTI5LThhMTBjNGFhNmQyMiIsImlhdCI6MTY3MjY3NjI4OCwic3ViIjoiZGV2ZWxvcGVyLzNhZDRhZDlkLWIwNmEtZjBkYi00YWQyLTJhYzM2MDRlYjU5YiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMzQuNjguMjQuOTMiXSwidHlwZSI6ImNsaWVudCJ9XX0.-3tbMStXrXfNGHc0CoVSDwEciY5nzz13isrRj5MjRwwfj5LhKsOKFSzRqp0xmiLTfw_v3iqzkeyF6DAbnjsy7w'
  )
    .then((resp) => res.json(resp.data))
    .catch((err) => res.json(err))
  // const { url } = req.query

  // if (url) {
  //   axios(url)
  //     .then((resp) => res.json(resp.data))
  //     .catch((err) => res.sendStatus(404))
  // } else {
  //   res.sendStatus(400)
  // }
})

export default pageRouter
