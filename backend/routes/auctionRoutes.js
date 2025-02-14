import express from 'express';
import { listPlayers, addPlayer, updatePlayer, placeBid } from '../controllers/auctionController.js';
import verifyAuth0Token from '../middleware/authMiddleware.js';

import express from 'express';
import { getAllAuctions, createAuction, placeBid } from '../controllers/auctionController.js';
import { verifyAuth0Token, checkRole } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/api/auction', getAllAuctions);
router.post('/api/auction', verifyAuth0Token, checkRole(['admin']), createAuction);
router.post('/api/auction/bid', verifyAuth0Token, checkRole(['team_owner']), placeBid);


router.get('/players', listPlayers);
router.post('/players', verifyAuth0Token, addPlayer);
router.put('/players/:id', verifyAuth0Token, updatePlayer);
router.post('/bid', verifyAuth0Token, placeBid);

export default router;
