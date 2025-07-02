// routes/friends.js

const express = require('express');
const friendsController = require('../controllers/friends.controllers'); // adjust the path if needed

const friendsRouter = express.Router();

// GET /friends - Get all friends
friendsRouter.get('/', friendsController.getFriends);

// GET /friends/:id - Get a specific friend by ID
friendsRouter.get('/:id', friendsController.getFriend);

// POST /friends - Add a new friend
friendsRouter.post('/', friendsController.postFriennd); // Rename to `postFriend` if you update it

module.exports = friendsRouter;
