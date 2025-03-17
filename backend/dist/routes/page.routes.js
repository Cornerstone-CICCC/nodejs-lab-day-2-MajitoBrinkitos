"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const page_controller_1 = __importDefault(require("../controllers/page.controller"));
const pageRouter = (0, express_1.Router)();
pageRouter.get('/', page_controller_1.default.home);
pageRouter.get('/set-cookie', page_controller_1.default.setCookie);
pageRouter.get('/check-cookie', page_controller_1.default.checkCookie);
pageRouter.get('/clear-cookie', page_controller_1.default.clearCookie);
exports.default = pageRouter;
