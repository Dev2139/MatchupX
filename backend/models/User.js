import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'umpire', 'viewer', 'teamOwner'], default: 'viewer' }
});

export const User = mongoose.model('User', UserSchema);
