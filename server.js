const express = require('express');
const routes = require('./routes')

// Binds to the nearest available port number if 3001 is unavailable
const PORT = process.env.PORT || 3001;
const app = express();

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})