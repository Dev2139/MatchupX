import express from 'express';
import { verifyAuth0Token } from '../middleware/auth.js';
import { checkRole } from '../middleware/authMiddleware.js';
import { User } from '../models/User.js';

const router = express.Router();

router.put('/api/users/:email/role', verifyAuth0Token, checkRole(['admin']), async (req, res) => {
  try {
    const { role } = req.body;
    const user = await User.findOneAndUpdate({ email: req.params.email }, { role }, { new: true });

    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({ message: 'User role updated', user });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
