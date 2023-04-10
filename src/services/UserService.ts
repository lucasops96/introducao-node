
const db = [
    {   
        name: "Joana",
        email:"joanans@dio.com"
    }
]

export class UserService{
    create = (name:string, email:string)=>{
        const user = {
            name,
            email
        }

        db.push(user)
        console.log('DB atualizado',db)
    }
    
    getAllUsers = () =>{
        return db
    }
}