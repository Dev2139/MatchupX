import express from 'express';

import express from 'express';
import { getViewerTournaments, getViewerMatches, getViewerScoreboard } from '../controllers/viewerController.js';
import { verifyAuth0Token } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/api/viewer/tournaments', verifyAuth0Token, getViewerTournaments);
router.get('/api/viewer/matches', verifyAuth0Token, getViewerMatches);
router.get('/api/viewer/scoreboard', verifyAuth0Token, getViewerScoreboard);


// Define viewer routes here

export default router;
