import express from 'express';
import { getMatches, createMatch, updateMatch } from '../controllers/matchController.js';
import verifyAuth0Token from '../middleware/authMiddleware.js';

import express from 'express';
import { getAllMatches, createMatch, updateMatch } from '../controllers/matchController.js';
import { verifyAuth0Token, checkRole } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/api/matches', getAllMatches);
router.post('/api/matches', verifyAuth0Token, checkRole(['admin']), createMatch);
router.put('/api/matches/:id', verifyAuth0Token, checkRole(['admin']), updateMatch);


router.get('/', getMatches);
router.post('/', verifyAuth0Token, createMatch);
router.put('/:id', verifyAuth0Token, updateMatch);

export default router;
