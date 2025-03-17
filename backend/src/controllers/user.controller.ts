import { Request, Response } from 'express'
import userModel from '../models/user.model'
import { User } from '../types/user'


//GetByUsername
/**
 * Get user by username
 * @param {Request<{username: string}>} req
 * @param {Response} res
 * @returns {void} Returns one user
 */
const GetByUsername = (req: Request<{ username: string }>, res: Response) => {
    const { username } = req.params
    const user = userModel.findByUsername(username)
    if(!user){
        res.status(404).send('User not found!')
        return
    }
    res.status(200).json(user)
}

/**
 * Add new user
 * 
 * @param {Request<{ id: string}>} req
 * @param {Response} res
 * @returns {void} Returns newly created user.
 */
const addUser = async (req: Request<{}, {}, Omit<User, 'id'>>, res: Response) => {
    const { username, password } = req.body
    if (!username || !password) {
      res.status(500).json({ error: 'Username/password is empty!' })
      return
    }
    const user = await userModel.createUser({ username, password })
    if (!user) {
      res.status(409).json({ error: 'Username is taken!' })
      return
    }
    res.status(201).json(user)
  }

/**
 * Login user
 * 
 * @param {Request<{}, {}, Omit<User, 'id'>>} req
 * @param {Response} res
 * @returns {void} Returns cookie and redirect.
 */
const loginUser = async (req: Request<{}, {}, Omit<User, 'id'>>, res: Response) => {
    const { username, password } = req.body
    if (!username || !password) {
      res.status(500).send("Username/password is missing!")
      return
    }
    const user = await userModel.checkUserPass(username, password)
    if (!user) {
      res.status(500).send("Login details are incorrect!")
      return
    }
    if (req.session) {
      req.session.isLoggedIn = true
      req.session.username = user.username
    }
    res.status(200).send("Successfully logged in!")
  }
export default {
    GetByUsername,
    loginUser,
    addUser
}