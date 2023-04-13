export interface User{
    name:string
    email:string
}

const db = [
    {   
        name: "Joana",
        email:"joanans@dio.com"
    }
]

export class UserService{
    db: User[]

    constructor(database = db){
        this.db = database
    }

    create = (name:string, email:string)=>{
        const user = {
            name,
            email
        }

        this.db.push(user)
        console.log('DB atualizado',this.db)
    }
    
    getAllUsers = () =>{
        return this.db
    }
}