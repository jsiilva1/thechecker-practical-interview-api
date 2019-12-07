/* 
 * External Dependecies 
*/
import express from 'express';
import helmet from 'helmet';
import compression from 'compression';

/* 
 * Internal Dependencies 
*/
import router from './server/router';

const app = express();

app.use(helmet());
app.use(compression());
app.keepAliveTimeout = 61 * 1000;
app.timeout = 60 * 1000;

// Routes of configuration
app.disable('x-powered-by');
app.use(`/api/v1`, router());

module.exports = app;
