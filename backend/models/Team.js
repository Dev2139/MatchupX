import mongoose from 'mongoose';

const TeamSchema = new mongoose.Schema({
  name: String,
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export const Team = mongoose.model('Team', TeamSchema);
