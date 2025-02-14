import express from 'express';
import { auth } from 'express-oauth2-jwt-bearer';

const router = express.Router();
import { register, login, googleLogin } from '../controllers/authController.js';


const verifyAuth0Token = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: 'RS256'
});

router.post('/api/auth/signup', register);
router.post('/api/auth/login', login);
router.post('/api/auth/google', googleLogin);


export default router;
