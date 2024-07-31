let express = require('express');
let router = express.Router();
let userRoutes = require('./ngo/userRoute');

let rootRouter = router;

rootRouter.use('/user', userRoutes);

module.exports = rootRouter;
