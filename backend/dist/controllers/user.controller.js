"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
//GetByUsername
/**
 * Get user by username
 * @param {Request<{username: string}>} req
 * @param {Response} res
 * @returns {void} Returns one user
 */
const GetByUsername = (req, res) => {
    const { username } = req.params;
    const user = user_model_1.default.findByUsername(username);
    if (!user) {
        res.status(404).send('User not found!');
        return;
    }
    res.status(200).json(user);
};
/**
 * Login user
 *
 * @param {Request<{}, {}, Omit<User, 'id'>>} req
 * @param {Response} res
 * @returns {void} Returns cookie and redirect.
 */
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(500).send("Username/password is missing!");
        return;
    }
    const user = yield user_model_1.default.checkUserPass(username, password);
    if (!user) {
        res.status(500).send("Login details are incorrect!");
        return;
    }
    if (req.session) {
        req.session.isLoggedIn = true;
        req.session.username = user.username;
    }
    res.status(200).send("Successfully logged in!");
});
exports.default = {
    GetByUsername,
    loginUser
};
