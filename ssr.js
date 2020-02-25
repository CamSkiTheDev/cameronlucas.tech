import express from 'express'

import path from 'path'
import fs from 'fs'

import React from 'react'

import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import App from './src/App'

const PORT = 4657
const app = express()

app.use(express.static('./build'))

app.get('/*', (req, res) => {
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  )

  const indexFile = path.resolve('./build/index.html')
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.log('Could not read index file...', err)
      return res.status(418).send('Oops, better luck next time!')
    }
    return res
      .status(200)
      .send(
        data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
      )
  })
})

app.listen(PORT, err => {
  if (err) return console.log('Something bad happened...', err)
  console.log(`Server running on port: ${PORT}`)
})
