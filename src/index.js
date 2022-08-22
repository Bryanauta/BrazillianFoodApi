const express = require('express');
const app = express();
const router = require('./routes/router');
const connection = require('./database/connection');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

try {
    connection.authenticate();
} catch(err) {
    console.log(err);
}

app.use('/', router);

app.listen(4141, () => {
    console.log('Server running...');
});