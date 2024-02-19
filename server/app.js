const express = require('express')
const app = express();
const sequelize = require('./util/database');
const postRoutes = require('./routes/user')
const cors = require('cors');
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/post-user', postRoutes)
app.use('/get-posts', postRoutes)


const PORT = 3000;


sequelize.sync()
.then(result => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });  
})
.catch(err => {
    console.log(err);
})