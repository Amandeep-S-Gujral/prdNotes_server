const functions = require('firebase-functions');
const admin = require('firebase-admin')

const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()


const subscriberRouter = require('./routes/subscriber')
const contactFormRouter = require('./routes/contactForm')
const contentListRouter = require('./routes/contentListRouter')
const contentBodyRouter = require('./routes/contentBodyRouter')
const authRouter = require('./routes/authRouter')
const comment = require('./routes/comment')
const adminDoc = require('./routes/adminDoc')
const cors = require('cors')

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}

app.use(cors(corsOptions))
app.use(cookieParser())

app.use(subscriberRouter)
app.use(contactFormRouter)
app.use(contentListRouter)
app.use(contentBodyRouter)
app.use(authRouter)
app.use(comment)
app.use(adminDoc)

app.use(express.json())

//exports the api to th firebase functions
exports.app = functions.https.onRequest(app)