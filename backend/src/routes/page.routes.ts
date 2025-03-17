import { Router } from 'express'
import pageController from '../controllers/page.controller'
import { checkLoggedOut } from '../middleware/auth.middleware'

const pageRouter = Router()

pageRouter.get('/', pageController.home)
pageRouter.get('/set-cookie', pageController.setCookie)
pageRouter.get('/check-cookie', pageController.checkCookie)
pageRouter.get('/clear-cookie', pageController.clearCookie)
pageRouter.get('/signup', checkLoggedOut, pageController.signup)
pageRouter.get('/login', checkLoggedOut, pageController.login)

export default pageRouter