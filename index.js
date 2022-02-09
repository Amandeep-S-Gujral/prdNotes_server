const functions = require('firebase-functions');
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()


const subscriberRouter = require('./routes/subscriberRouter')
const contactFormRouter = require('./routes/contactForm')
const contentListRouter = require('./routes/contentListRouter')
const contentBodyRouter = require('./routes/contentBodyRouter')
const authRouter = require('./routes/authRouter')
const comment = require('./routes/comment')
const adminDoc = require('./routes/adminDoc')
const projectRouter = require('./routes/projectRouter')

const allowedOrigins = ['https://www.prdnotes.com', 'http://localhost:3000']

app.use(cors({
  origin: function(origin, callback){
    // do not allow requests with no origin 
    if(!origin) return callback(null, false);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = `The CORS policy for this site does not allow access from the specified Origin [ ${origin} ].`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(cookieParser())

app.use(subscriberRouter)
app.use(contactFormRouter)
app.use(contentListRouter)
app.use(contentBodyRouter)
app.use(authRouter)
app.use(comment)
app.use(adminDoc)
app.use(projectRouter)

app.use(express.json())

//exports the api to the firebase functions
exports.app = functions.region('asia-south1').https.onRequest(app)