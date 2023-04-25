import { UserService} from "../services/UserService";
import { UserController } from "./UserController"
import { makeMockRequest } from "../__mocks__/mockRequest.mock";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { Request} from "express";

const mockUserService = {
    createUser: jest.fn()
}

jest.mock('../services/UserService',()=>{
    return {
        UserService: jest.fn().mockImplementation(()=>{
            return mockUserService
        })
    }
})

describe('UserController',()=>{
    // const mockUserService:Partial<UserService>={
    //     createUser:jest.fn()
    // }

    const userController = new UserController();
    const mockResponse = makeMockResponse()

    it('Deve adicionar um novo usuário',()=>{
        const mockRequest = {
            body:{
                name:"João Miguel",
	            email:"miguelDIO@gmail.com",
                password:'password'
            }
        } as Request
         
        userController.createUser(mockRequest,mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({message:'User created'})
    })

    it('Deve retornar erro caso o usuário não informe o name',()=>{
        const mockRequest = {
            body:{
                name:'',
	            email:"miguelDIO@gmail.com",
                password:'password'
            }
        } as Request
        
        userController.createUser(mockRequest,mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({message:'Bad request! Todos os campos são obrigatório'})
    })

    it('Deve retornar erro caso o usuário não informe o email',()=>{
        const mockRequest = {
            body:{
                name:'João Miguel',
	            email:'',
                password:'password'
            }
        } as Request
         
        userController.createUser(mockRequest,mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({message:'Bad request! Todos os campos são obrigatório'})
    })

    it('Deve retornar erro caso o usuário não informe o password',()=>{
        const mockRequest = {
            body:{
                name:'João Miguel',
	            email:'miguelDIO@gmail.com',
                password:''
            }
        } as Request
         
        userController.createUser(mockRequest,mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({message:'Bad request! Todos os campos são obrigatório'})
    })

    

    // it('Deletar usuário',()=>{
        
        
    //     const mockRequest = {
    //         body:{
    //             name:"João Miguel",
	//             email:"miguelDIO@gmail.com"
    //         }
    //     } as Request
        
    //     userController.deleteUser(mockRequest,mockResponse)
    //     expect(mockResponse.state.status).toBe(200)
    // })
})