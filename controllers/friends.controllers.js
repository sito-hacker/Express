const model = require('../models/friends.model');


function postFriennd (req, res)  {
    console.log('Received body:', req.body); // Debug log
    
    // Check if the request body contains a name
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Missing Friend name'
        });
    }

    const newFriend = {
        name: req.body.name,
        id: model.length
    };
    model.push(newFriend);
    res.json(newFriend);
}

function getFriends(req, res) {
    res.json(model);
}

function getFriend (req, res)  {
    const friendId = Number(req.params.id); // Convert to number
    const friend = model[friendId];
    if (friend) {
        res.json(friend);
    } else {
        res.status(404).json({ error: 'Friend not found' });
    }
}

module.exports ={
    postFriennd,
    getFriends,
    getFriend
}