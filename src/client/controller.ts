import { Request, Response } from "express";
import * as service from "./service";

export function getAllClient(req: Request, res: Response){
    res.status(200).send({clientes: service.getAllClients()})
}

export function getClient(req: Request, res: Response){
    res.status(200).send({cliente: service.getClient(Number(req.params.id))})
}

export function addClient(req: Request, res: Response){
    service.addClient(req.body)
    res.status(200).send({status: "ok"})
}