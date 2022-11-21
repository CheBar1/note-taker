// dependencies
const express = require('express');
const path = require('path');

// load express.js
const app = express();

// mount middleware for json
app.use(express.json());

// mount middleware for static files
app.use(express.static(path.join(__dirname, 'public')));

// mount middleware for api router
app.use('/api/notes', require('./routes/apiRoutes'));

// mount middleware for html router
app.use('/', require('./routes/htmlRoutes'));

// start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}....`);
});
 