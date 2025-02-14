import mongoose from 'mongoose';

const PlayerSchema = new mongoose.Schema({
  name: String,
  role: String,
  basePrice: Number,
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' }
});

export const Player = mongoose.model('Player', PlayerSchema);
