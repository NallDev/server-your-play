const mongoose = require('mongoose')
require('dotenv').config()

const db = {}

db.mongoose = mongoose
db.url = process.env.MONGO_URL
db.videos = require('./Video')(mongoose)

module.exports = db