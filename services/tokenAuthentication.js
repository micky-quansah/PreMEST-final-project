const jwt = require('jsonwebtoken');

const getTokenFrom = (reqToken) => {
  const authorization = reqToken.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7);
  }
  return null;
};

const tokenAuth = async (req, res, User) => {
  const token = getTokenFrom(req);

  const decodedToken = jwt.verify(token, process.env.SECRET);

  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' });
  }
  const user = await User.findById(decodedToken.id);

  return user;
};

/* const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(session({
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(session({
    store: new MongoStore({
        url: 'mongodb://localhost/test-app',
        ttl: 14 * 24 * 60 * 60 // = 14 days. Default
    })
}));

var app = express()
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

req.session.regenerate(function(err) {
  // will have a new session here
})

req.session.destroy(function(err) {
  // cannot access session here
})

app.use(session({
    secret: 'foo',
    store: new MongoStore(options)
})); */

module.exports = tokenAuth;
