import express from 'express';

import express from 'express';
import { getUmpires, addUmpire, updateUmpire, getAssignedMatches, updateMatchScore } from '../controllers/umpireController.js';
import { verifyAuth0Token, checkRole } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/api/umpire/matches', verifyAuth0Token, checkRole(['umpire']), getAssignedMatches);
router.put('/api/umpire/matches/:id/score', verifyAuth0Token, checkRole(['umpire']), updateMatchScore);


// Define umpire routes here

export default router;
