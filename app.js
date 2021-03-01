const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/login', (req, res) => {
    res.render('login');
})
app.get('/register', (req, res) => {
    res.render('register');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server started on port " + port);
});