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

    deleteUser = (name:string, email:string) => {
        const user = this.db.find((user)=> user.email === email)

        if (!user) {
            throw new Error("Unexpected error: user not found");
        }
        const userIndex = this.db.indexOf(user)

        this.db.splice(userIndex,1)

    }
}