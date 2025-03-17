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
/**
 * Displays the sign up page
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {void} Renders the sign up page.
 */
const signup = (req, res) => {
    res.status(200).render('signup');
};
/**
 * Displays the login page
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {void} Renders the login page.
 */
const login = (req, res) => {
    res.status(200).render('login');
};
exports.default = {
    signup,
    login,
    home,
    checkCookie,
    clearCookie,
    setCookie
};
