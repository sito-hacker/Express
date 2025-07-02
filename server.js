const express = require('express');// Importing express framework


const path = require('path');
// Importing dotenv to load environment variables
const friendsController = require('./controllers/friends.controllers');

const messagesController = require('./controllers/messages.controllers');


const app = express();

app.set('view engine', 'hbs'); // Set Handlebars as the view engine
app.set('views', path.join(__dirname, 'views')); // Set the views directory


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

    app.use( '/site',express.static(path.join(__dirname,'public'))); // Serve static files from the 'public' directory
    app.use(express.json()); // Middleware to parse JSON bodies
    
    
});


app.get('/' , (req, res) => {
    res.render('index', { title: 'Home Page',
        caption: 'Welcome to the Home Page',
     }); // Render the index view
});
app.use(express.json()); // Middleware to parse JSON bodies

const friendsRouter = express.Router();




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
friendsRouter.post('/',friendsController.postFriennd);   
friendsRouter.get('/friends', friendsController.getFriends); 
friendsRouter.get('/friends/:id', friendsController.getFriend);

app.use('/friends', friendsRouter); // Use the friends router



//Messages controllers written here
app.get('/messages', messagesController.getMessages);
app.post('/messages', messagesController.postMessages);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});