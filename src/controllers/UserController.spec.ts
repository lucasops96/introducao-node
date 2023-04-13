import { UserService } from "../services/UserService";
import { UserController } from "./UserController"
import { makeMockRequest } from "../__mocks__/mockRequest.mock";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { Request} from "express";

describe('UserController',()=>{
    const mockUserService:Partial<UserService>={
        create:jest.fn()
    }

    const userController = new UserController(mockUserService as UserService);

    it('Deve adicionar um novo usuário',()=>{
        const mockRequest = {
            body:{
                name:"João Miguel",
	            email:"miguelDIO@gmail.com"
            }
        } as Request
        const mockResponse = makeMockResponse() 
        userController.createUser(mockRequest,mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({message:'User created'})
    })
})