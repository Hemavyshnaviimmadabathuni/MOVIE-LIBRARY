const express = require('express');
const app = express();
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const mongoose = require('mongoose');
const Playlist = require('../models/Playlist');

// Middleware (e.g., body-parser, if needed)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set view engine to ejs
app.set('view engine', 'ejs');

// Define routes
// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/home', ensureAuthenticated, (req, res) => 
  res.render('home', { user: req.user })
);

// Movie app pages
router.get('/watchlists', ensureAuthenticated, (req, res) => {
  const useremail = req.user.email;
  const query = { email: useremail };

  Playlist.distinct("playlistname", query).then((ans) => {
    res.render('watchlists', { user: req.user, playlistarray: ans });
  });
});

router.post('/watchlists', ensureAuthenticated, (req, res) => {
  const movieid = req.body.movieid;
  const useremail = req.user.email;
  var newname = req.body.newname;
  if (!newname) {
    newname = 'myplaylist';
  }

  const newPlaylist = new Playlist({
    email: useremail,
    movieId: movieid,
    playlistname: newname
  });
  newPlaylist.save();

  const query = { email: useremail };
  Playlist.distinct("playlistname", query).then((ans) => {
    res.render('watchlists', { user: req.user, playlistarray: ans });
  });
});

router.post('/watchlists/viewplaylist', ensureAuthenticated, (req, res) => {
  const useremail = req.user.email;
  const playlistname = req.body.playlistname;
  const query = { playlistname: playlistname, email: useremail };

  Playlist.distinct("movieId", query).then((ans) => {
    res.render('viewplaylist', {
      user: req.user,
      playlistname: playlistname,
      movies: ans
    });
  });
});

// Use the router
app.use('/', router);

// Export the Express app
module.exports = app;
