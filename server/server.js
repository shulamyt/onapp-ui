const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const UserWS = require('./user/UserWS');


const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('Listening on port ' + port);
});

const userWS = new UserWS();
app.use(userWS.getRouter());