const Router = require('express').Router;
const axios = require('axios');
const {getIndex, getAbout, getNosotros, getTerminos, getPrivacidad} = require('../controllers/indexController');

const indexRouter = Router();

indexRouter.get('/', getIndex )
indexRouter.get('/about', getAbout )
indexRouter.get('/nosotros', getNosotros )
indexRouter.get('/terminos', getTerminos)
indexRouter.get('/privacidad', getPrivacidad)


module.exports = indexRouter
