const express = require('express');// Importing express framework

// Importing dotenv to load environment variables
const friendsController = require('./controllers/friends.controllers');

const messagesController = require('./controllers/messages.controllers');


const app = express();
const PORT = 3000;


// Middleware function - Fixed timing
app.use((req, res, next) => {
    const start = Date.now();
    console.log(`${req.method} request for ${req.url}`);
    
    // Log after the request is finished
    res.on('finish', () => {
        const delta = Date.now() - start;
        console.log(`Request completed in ${delta}ms`);
    });
    
    next();
});

app.use(express.json()); // Middleware to parse JSON bodies

// Error handling for malformed JSON
app.use((error, req, res, next) => {
    if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
        console.error('Bad JSON:', error.message);
        return res.status(400).json({ 
            error: 'Invalid JSON format',
            details: error.message 
        });
    }
    next();
});
// Freinds controllers written here
app.post('/friends',friendsController.postFriennd);   
app.get('/friends', friendsController.getFriends); 
app.get('/friends/:id', friendsController.getFriend);


//Messages controllers written here
app.get('/messages', messagesController.getMessages);
app.post('/messages', messagesController.postMessages);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});