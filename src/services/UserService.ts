import { UserRepository } from "../repositories/UserRepository"
import { AppDataSource } from "../database"
import { User } from "../entities/User";

export class UserService{
    private userRepository:UserRepository;

    constructor(userRepository = new UserRepository(AppDataSource.manager) ){
        this.userRepository = userRepository;
    }

    createUser = async (name:string, email:string,password:string):Promise<User>=>{
        const user = new User(name,email,password)

        return this.userRepository.createUser(user)
    }
    
    getUser = () =>{
        
    }

    // deleteUser = (name:string, email:string) => {
    //     const user = this.db.find((user)=> user.email === email)

    //     if (!user) {
    //         throw new Error("Unexpected error: user not found");
    //     }
    //     const userIndex = this.db.indexOf(user)

    //     this.db.splice(userIndex,1)

    // }
}