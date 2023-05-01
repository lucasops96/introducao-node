import { Request, Response } from "express"
import { sign } from "jsonwebtoken"


export class LoginController {
    login = async (request:Request, response:Response)=>{
        
    

        return response.status(200).json({token})
    }
}