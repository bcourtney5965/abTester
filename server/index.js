const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 

app.use(express.static('../client1/src'));

app.get('/test', (req, res) => {
  res.status(200).json({"this": "works"});
});

app.listen(port, (err) => {
  if (err) {
    console.log(`you have an error: ${err}`);
  }
  console.log(`app listening on port# ${port}`);
});
