import express from 'express';
import { getMatchScore, updateMatchScore, getAllScores } from '../controllers/scoreboardController.js';
import verifyAuth0Token from '../middleware/authMiddleware.js';

import express from 'express';
import { getMatchScore, updateMatchScore, getAllScores } from '../controllers/scoreboardController.js';
import { verifyAuth0Token, checkRole } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/api/matches/:id/score', getMatchScore);
router.put('/api/matches/:id/score', verifyAuth0Token, checkRole(['umpire']), updateMatchScore);
router.get('/api/scoreboard', getAllScores);


router.get('/:id/score', getMatchScore);
router.put('/:id/score', verifyAuth0Token, updateMatchScore);
router.get('/', getAllScores);

export default router;
