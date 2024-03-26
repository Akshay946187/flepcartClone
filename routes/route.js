import express from 'express'

import {userSignup,userLogin,getProduts,getProdutById} from '../user-controler/user.js'



const router = express.Router()

// login and signup routes
router.post('/signup',userSignup)
router.post('/login',userLogin)

// fetch products route
router.get('/produts',getProduts)
router.get('/product/:id',getProdutById)


export default router