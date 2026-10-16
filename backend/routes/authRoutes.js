import { Router } from 'express'
import { healthCheck, loginUser } from '../controllers/authController.js'

const router = Router()

router.get('/health', healthCheck)
router.post('/login', loginUser)

export default router
