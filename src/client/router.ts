import { addClient, getAllClient, getClient } from "./controller";
import { Router } from 'express'

const router = Router() 

router.get('/clientes', getAllClient )
router.get('/clientes/:id', getClient )
router.post('/clientes', addClient )

export default router