import { Router } from "express";
import { UserController } from "./controllers/UserController";

const router = Router()

const userController = new UserController()

router.post('/user', userController.createUser)
router.get('/user', userController.getUser)
router.delete('/user',userController.deleteUser)

export {router}