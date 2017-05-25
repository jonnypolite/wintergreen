'use strict'

const express = require('express')

const app = express()
app.set('port', (process.env.PORT || 8442))

const transactions = require('./apis/transactions')

app.use('/api/transactions', transactions)

app.listen(app.get('port'), () => {
  console.log(`wintergreen API now running at: http://localhost:${app.get('port')}/`)
})
