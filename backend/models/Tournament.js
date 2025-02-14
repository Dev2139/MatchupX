import mongoose from 'mongoose';

const TournamentSchema = new mongoose.Schema({
  name: String,
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
  matches: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Match' }]
});

export const Tournament = mongoose.model('Tournament', TournamentSchema);
