const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:4001',
  clientID: 'sGWL33X5CMls52ArGYzuBbK5oGIWSR0q',
  issuerBaseURL: 'https://dev-sp23bjjb12kyylbu.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
<<<<<<< HEAD

module.exports = app;
=======
>>>>>>> 7941595b6cba6428be9d8ac7fa48c71071ba3539
