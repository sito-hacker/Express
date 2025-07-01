function getMessages(req, res)  {

    res.send('<ul><li>Message 1</li><li>Message 2</li><li>Message 3</li></ul>');  
}

function postMessages(req, res) {
    console.log('Updating messages!');
}

module.exports = {
    getMessages,
    postMessages
};  