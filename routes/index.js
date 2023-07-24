const express = require('express');
const router = express.Router();

//importo los routers
const userRouter = require('./users');
const songRouter = require('./songs');
const playlistRouter = require('./playlists');
const cupidRouter = require('./cupid');



router.use('/users', userRouter);
//comento ya que no defini los index de songs y playlists
router.use('/songs', songRouter);
router.use('/playlists', playlistRouter);
router.use('/cupids', cupidRouter);

module.exports = router;