// controllers/messages.controllers.js

const path = require('path');

function getMessages(req, res) {
  // 
  res.render('messages',{
    title:'Messages to my Friends!',
    friends: 'Elon Mussk',
  });
}


function postMessages(req, res) {
  res.send('Message posted');
}

module.exports = {
  getMessages,
  postMessages,
};
