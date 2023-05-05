import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { LoginController } from "./controllers/LoginController";
import { verifyAuth } from "./midlleware/verifyAuth";

const router = Router()

const userController = new UserController()
const loginController =  new LoginController()

router.post('/user', userController.createUser)
router.get('/user/:userId',verifyAuth, userController.getUser)
router.delete('/user',userController.deleteUser)

router.post('/login',loginController.login)

export {router}