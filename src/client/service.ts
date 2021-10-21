import { Client } from './domain'
import * as model from './model'

export function getAllClients(){
    return model.getAllClients()
} 

export function getClient(id: number){
    return model.getClient(id)
} 

export function addClient(client: Client){
    if (validateClient(client)){
      model.addClient(client)
    }
} 

function validateClient(client: Client): boolean{
    return client.id !== undefined &&
           client.mail !== undefined &&
           client.name !== undefined
}