import { EntityManager } from "typeorm";

interface MockManagerAgrs{
    saveReturn?:object | [object]
}

export const getMockEntityManager = async ({
    saveReturn =  undefined
}:MockManagerAgrs):Promise<EntityManager>=>{
    const manager:Partial<EntityManager> = {}

    manager.save = jest.fn().mockImplementation(()=>Promise.resolve(saveReturn))

    return manager as EntityManager
}