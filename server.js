const express = require('express');
const routes = require('./routes');
//Import the code block responsible for connecting to the database
const sequelize = require('./routes/config/connection');

// Binds to the nearest available port number if 3001 is unavailable
const PORT = process.env.PORT || 3001;
const app = express();

app.use(routes);

// First we connect to the database
sequelize.sync().then( () => {
    // Then we open the server
    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
    })
})
