import express from 'express';
import { getTournaments, createTournament, updateTournament, deleteTournament } from '../controllers/tournamentController.js';
import verifyAuth0Token from '../middleware/authMiddleware.js';

import express from 'express';
import { getAllTournaments, createTournament, updateTournament, deleteTournament } from '../controllers/tournamentController.js';
import { verifyAuth0Token, checkRole } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/api/tournaments', getAllTournaments);
router.post('/api/tournaments', verifyAuth0Token, checkRole(['admin']), createTournament);
router.put('/api/tournaments/:id', verifyAuth0Token, checkRole(['admin']), updateTournament);
router.delete('/api/tournaments/:id', verifyAuth0Token, checkRole(['admin']), deleteTournament);


router.get('/', getTournaments);
router.post('/', verifyAuth0Token, createTournament);
router.put('/:id', verifyAuth0Token, updateTournament);
router.delete('/:id', verifyAuth0Token, deleteTournament);

export default router;
