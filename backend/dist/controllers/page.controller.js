"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//home
const home = (req, res) => {
    res.status(200).send("My server");
};
//getCookie
const setCookie = (req, res) => {
    if (req.session) {
        req.session.message = "I'm your cookie";
    }
    res.status(200).json({
        message: "You got a cookie!"
    });
};
//checkCookie
const checkCookie = (req, res) => {
    if (req.session && req.session.message) {
        res.status(200).json({
            content: req.session.message
        });
        return;
    }
    res.status(500).json({
        content: "No cookie found"
    });
};
//clearCookie
const clearCookie = (req, res) => {
    req.session = null;
    res.status(200).json({
        content: "Cookie cleared"
    });
};
exports.default = {
    home,
    setCookie,
    checkCookie,
    clearCookie
};
