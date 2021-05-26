const functions = require('firebase-functions');
const admin = require('firebase-admin')

const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()


const subscriberRouter = require('./routes/subscriber')
const contactFormRouter = require('./routes/contactForm')
const content = require('./routes/content')
const comment = require('./routes/comment')
const adminDoc = require('./routes/adminDoc')
const cors = require('cors')

const corsOptions = {
    origin: 'https://localhost:3000',
    credentials: true
}

app.use(cors(corsOptions))
app.use(cookieParser())

app.use(subscriberRouter)
app.use(contactFormRouter)
app.use(content)
app.use(comment)
app.use(adminDoc)

app.use(express.json())

//exports the api to th firebase functions
exports.app = functions.https.onRequest(app)