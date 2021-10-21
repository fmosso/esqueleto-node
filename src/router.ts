import { Router } from 'express'
import clientRouter from './client/router'
import morgan from 'morgan'

const router = Router()  

router.use(morgan('combined'))

router.use(clientRouter);

export default router