const express = require('express');
const config = require('./config/index');
const { userRoute, orderRoute, itemRoute } = require('./routes/index');
require('./utlis/db');

const app = express();

//middleware
app.use(express.json());
app.use('/api/v1', userRoute);
app.use('/api/v1', orderRoute);
app.use('/api/v1', itemRoute);


app.listen(config.port, () => {
  console.log(`Server is listen ${config.port}`);
})
