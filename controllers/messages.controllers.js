// controllers/messages.controllers.js

const path = require('path');

function getMessages(req, res) {
  const filePath = path.join(__dirname, '..', 'public', 'images', 'images.jpeg');
  res.sendFile(filePath);
}


function postMessages(req, res) {
  res.send('Message posted');
}

module.exports = {
  getMessages,
  postMessages,
};
