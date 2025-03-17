import { v4 as uuidv4 } from 'uuid'
import { User } from '../types/user'
import bcrypt from 'bcrypt'

class UserModel {
    private users: User[] = []

    //findByUsername(username)
    findByUsername(username: string){
        const user = this.users.find(u => u.username === username)
        if(!user) return null
        return user
    }

    //check user password
    async checkUserPass(username: string, password: string) {
        const user = this.users.find(u => u.username === username)
        if (!user) return false
        const isMatch: boolean = await bcrypt.compare(password, user.password)
        if (!isMatch) return false
        return user
      }

    //create(newUser)
    async createUser(newUser: Omit<User, 'id'>) {
        const { username, password } = newUser
        const foundIndex = this.users.findIndex(u => u.username === username)
        if (foundIndex !== -1) return false
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = {
          id: uuidv4(),
          username,
          password: hashedPassword
        }
        this.users.push(user)
        return user
      }
}

export default new UserModel