const express = require("express");
const dotenv = require('dotenv');
const cors = require("cors");
const HttpException = require('./utils/HttpException.utils');
const errorMiddleware = require('./middleware/error.middleware');

const MoviewRouter = require('./routes/route');

const app = express();
dotenv.config();

app.use(express.json());

app.use(cors());

app.options("*", cors());

const port = Number(process.env.PORT || 3434);

// Manage API
app.use(`/api/v1`, MoviewRouter);

// 404 error
app.all('*', (req, res, next) => {
    const err = new HttpException(404, 'Endpoint Not Found');
    next(err);
});

app.use(errorMiddleware);

// starting the server
app.listen(port, () =>
    console.log(`Server running on port ${port}!`));


module.exports = app;
