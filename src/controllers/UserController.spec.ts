import { UserService} from "../services/UserService";
import { UserController } from "./UserController"
import { makeMockRequest } from "../__mocks__/mockRequest.mock";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { Request} from "express";

describe('UserController',()=>{
    const mockUserService:Partial<UserService>={
        create:jest.fn(),
        getAllUsers:jest.fn(),
        deleteUser:jest.fn()
    }

    const userController = new UserController(mockUserService as UserService);
    const mockResponse = makeMockResponse()

    it('Deve adicionar um novo usuário',()=>{
        const mockRequest = {
            body:{
                name:"João Miguel",
	            email:"miguelDIO@gmail.com"
            }
        } as Request
         
        userController.createUser(mockRequest,mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({message:'User created'})
    })

    it('Deve dá um erro por não ter nome de usuário quando for criar',()=>{
        const mockRequest = {
            body:{
                name:'',
	            email:"miguelDIO@gmail.com"
            }
        } as Request
        
        userController.createUser(mockRequest,mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({message:'Bad request! Name e Email dobrigatório'})
    })

    it('Deve dá um erro por não ter email de usuário quando for criar',()=>{
        const mockRequest = {
            body:{
                name:'João Miguel',
	            email:''
            }
        } as Request
         
        userController.createUser(mockRequest,mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({message:'Bad request! Name e Email dobrigatório'})
    })

    it('Deve retornar todos os usuários',()=>{
        const mockRequest = {} as Request 
        
        userController.getAllUsers(mockRequest,mockResponse)
        expect(mockResponse.state.status).toBe(200)
    })

    it('Deletar usuário',()=>{
        const userController = new UserController( 
            new UserService([{name:"João Miguel",email:"miguelDIO@gmail.com"}]));
        
        const mockRequest = {
            body:{
                name:"João Miguel",
	            email:"miguelDIO@gmail.com"
            }
        } as Request
        
        userController.deleteUser(mockRequest,mockResponse)
        expect(mockResponse.state.status).toBe(200)
    })
})