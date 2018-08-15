const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'client/build')));

app.use('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT);