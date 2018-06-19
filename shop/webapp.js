const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/mulder', (req, res) => {
  res.send('mulder, good');
});
app.get('/scully', (req, res) => {
  res.send('scully, good');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
