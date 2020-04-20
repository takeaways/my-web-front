"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var next = require('next');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var dotenv = require('dotenv');
var cors = require('cors');
var dev = process.env.NODE_ENV !== 'production';
var app = next({ dev: dev });
var handle = app.getRequestHandler();
dotenv.config();
app.prepare().then(function () {
    var server = express();
    server.use(morgan('dev'));
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use(cookieParser());
    server.use(cors());
    // server.use(expressSession({
    // resave: false,
    // saveUninitialized: false,
    // secret: process.env.COOKIE_SECRET,
    // cookie: {
    //     httpOnly: true,
    //     secure: false,
    // },
    // }));
    // server.get('/post/:id', (req, res) => {
    //     return app.render(req, res, '/post', { id: req.params.id });
    // });
    //
    // server.get('/hashtag/:tag', (req, res) => {
    //     return app.render(req, res, '/hashtag', { tag: req.params.tag });
    // });
    //
    // server.get('/user/:id', (req, res) => {
    //     return app.render(req, res, '/user', { id: req.params.id });
    // });
    server.get('*', function (req, res) {
        return handle(req, res);
    });
    server.listen(process.env.PORT, function () {
        console.log('next+express running on port ' + process.env.PORT);
    });
});
