import { Router } from 'express'
import pageController from '../controllers/page.controller'

const pageRouter = Router()

pageRouter.get('/', pageController.home)
pageRouter.get('/set-cookie', pageController.setCookie)
pageRouter.get('/check-cookie', pageController.checkCookie)
pageRouter.get('/clear-cookie', pageController.clearCookie)

export default pageRouter