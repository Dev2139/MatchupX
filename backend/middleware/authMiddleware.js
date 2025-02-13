import { auth } from 'express-oauth2-jwt-bearer';
import { User } from '../models/User.js';

export const verifyAuth0Token = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: 'RS256'
});

export const checkRole = (roles) => {
  return async (req, res, next) => {
    const userEmail = req.auth?.payload?.email;
    if (!userEmail) return res.status(401).json({ message: "Unauthorized" });

    const user = await User.findOne({ email: userEmail });
    if (!user || !roles.includes(user.role)) {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  };
};
