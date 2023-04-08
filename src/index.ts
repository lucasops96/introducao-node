import express, { Request, Response } from 'express';

const server = express();

server.use(express.json())

server.get('/', (request:Request,response:Response)=>{
    return response.status(200).json({message:'Bem vindo ao Dio Bank'})
})

server.post('/user',(request:Request,response:Response)=>{
    const user = request.body
    console.log(user)
    return response.status(201).json({message:'User created'})
})

server.listen(5000,()=> console.log('Server is running'))