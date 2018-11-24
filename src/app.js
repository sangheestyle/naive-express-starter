const express = require('express');

const app = express();
const port = 3000;

app.get('/user', (req, res) => {
  res.status(200).json({ name: 'ari' });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
