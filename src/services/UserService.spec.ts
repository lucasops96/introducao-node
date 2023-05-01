import { UserService } from "./UserService"

jest.mock('../repositories/UserRepository')
jest.mock('../database', ()=>{
    initialize:jest.fn()
})

const mockUserRepository =  require('../repositories/UserRepository')

describe('UserService',()=>{
    const userService =  new UserService(mockUserRepository)
    const mockUser = {
        id_user:'123456',
        name:'nath',
        email:'nath@test.com',
        password:'123456'
    }     

    it('Deve adicionar um novo usuário',async ()=>{
        mockUserRepository.createUser = jest.fn().mockImplementation(()=>Promise.resolve(mockUser));
        const response = await userService.createUser('nath','nath@test.com','12345');
        expect(mockUserRepository.createUser).toHaveBeenCalled();
        expect(response).toMatchObject({
                id_user:'123456',
                name:'nath',
                email:'nath@test.com',
                password:'123456'
        })
    })

    it('Devo retornar um token de usuário', async ()=>{
        jest.spyOn(userService,'getAuthenticatedUser').mockImplementation(()=> Promise.resolve(mockUser))
        const token = await userService.getToken('nath@test.com','123456')
        expect(token).toBe('123456')
    })

})