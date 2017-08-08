const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.join(__dirname, '../client/')));
app.use(bodyParser.json());


app.listen(PORT, () => {
	console.log('Listening on port ' + PORT);
});