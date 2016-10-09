import express = require('express');
import {Router} from "express";
import {RegistrationService} from "./RegistrationService";

const PORT = 50005;
const TIMEOUT_MS_TOKEN = 5000;

const PARAM_NEWTOKEN = 'newtoken';
const PARAM_TOKEN = 'token';
const PARAM_THROTTLE = 'throttle';

const STATUS_UNAUTHORIZED = 401;

let registration = new RegistrationService(TIMEOUT_MS_TOKEN);

/* */
let api = Router();
// Handle CORS
api.use((req, res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
// Handle token
api.param(PARAM_TOKEN, (req, res, next)=> {
    let token = req.params[PARAM_TOKEN];
    if (registration.allowed(token)) {
        next();
    } else {
        res.status(STATUS_UNAUTHORIZED).end();
    }
});
//
api.post(`/claim/:${PARAM_NEWTOKEN}/`, (req, res)=> {
    let newtoken = req.params[PARAM_NEWTOKEN];
    if (registration.claim(newtoken)) {
        res.end();
    } else {
        res.status(STATUS_UNAUTHORIZED).end();
    }
});
//
api.post(`/touch/:${PARAM_TOKEN}/`, (req, res)=> {
    registration.touch();
    res.end();
});
//
api.post(`/release/:${PARAM_TOKEN}/`, (req, res)=> {
    registration.release();
    res.end();
});
//
api.post(`/start/:${PARAM_TOKEN}/:name/`, (req, res)=> {
    res.end();
});
//
api.post(`/throttle/:${PARAM_TOKEN}/:throttle/`, (req, res)=> {
    let throttle = req.params[PARAM_THROTTLE];
    // TODO
    res.end();
});

/* */
let app = express();
app.use('/api', api);
app.listen(
    PORT,
    ()=> {
        console.log(`Service listening on ${PORT}`);
    }
);
