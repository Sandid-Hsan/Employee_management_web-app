require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const usercontroller = require('./controllers/usercontroller');
const port = process.env.NODE_LOCAL_PORT || 3020;


var app = express();

app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'mainlayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use('/user', usercontroller);