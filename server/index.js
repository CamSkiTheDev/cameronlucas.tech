const express = require('express')
const cors = require('cors')

const { google } = require('googleapis')
const { OAuth2 } = google.auth

const oAuth2Client = new OAuth2(
  '94823356263-d4jvhug5niq4dq22aeljb9u217ok4a13.apps.googleusercontent.com',
  'wif-T0277r1FDFunoFTtrJpl'
)

oAuth2Client.setCredentials({
  refresh_token:
    '1//04IlUiv6bX7nfCgYIARAAGAQSNwF-L9IrugIiBYKymKz4MigZvja-59tUehIeKZVebyWEcZhqHiTBtwXvNT_dA42GcboVzH9FPag',
})

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const PORT = process.env.PORT || 5000

app.get('/api/youtube/stats', (req, res) => {
  const youtube = google.youtube('v3')

  youtube.channels.list(
    {
      auth: oAuth2Client,
      part: 'statistics,snippet,contentDetails',
      id: 'UCPrxunD5p-goX5tsOeHC6oQ',
    },
    (err, results) => {
      if (err) return console.error('Youtube Error:', err)
      const channels = results.data.items
      const channelTitle = channels[0].snippet.title
      const channelSubCount = channels[0].statistics.subscriberCount
      const channelViewCount = channels[0].statistics.viewCount
      const channelVideoCount = channels[0].statistics.videoCount
      res.status(200).send({
        success: true,
        channelInfo: {
          channelTitle,
          channelSubCount,
          channelVideoCount,
          channelViewCount,
        },
      })
    }
  )
})

app.listen(PORT, err => {
  if (err) return console.error('Server Error:', err)
  return console.log('Server running on port: ', PORT)
})
