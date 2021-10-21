import { Client } from "./domain"

const db: Client[] = [] //Simulates a DB

export function getAllClients(): Client[]{
    return db
}

export function getClient(id: number){
    return db.find(client => client.id === id)
}

export function addClient(client: Client): void{
     db.push(client)
}