import express from 'express'
import { register } from '../controllers/AuthControllers.js';
const AuthRouters = express.Router()

AuthRouters.post('/register', register)

export default AuthRouters;