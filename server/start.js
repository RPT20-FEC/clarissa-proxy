// require('dotenv').config();
const app = require('./index.js');
const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});