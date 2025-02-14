import express from 'express';

import express from 'express';
import { getPlayers, addPlayer, updatePlayer } from '../controllers/playerController.js';

const router = express.Router();

router.get('/api/players', getPlayers);
router.post('/api/players', verifyAuth0Token, checkRole(['admin']), addPlayer);
router.put('/api/players/:id', verifyAuth0Token, checkRole(['admin']), updatePlayer);


// Define player routes here

export default router;
