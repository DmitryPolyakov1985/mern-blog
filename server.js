const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8080;
const path = require('path');

const homeRoutes = require('./routes/home');
const articlesRoutes = require('./routes/articles');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use('/', homeRoutes);
app.use('/articles', articlesRoutes);

// server static assets if in production
if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}



app.listen(port, () => console.log(`App is up on port ${port}`));