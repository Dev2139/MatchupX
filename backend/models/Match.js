import mongoose from 'mongoose';

const MatchSchema = new mongoose.Schema({
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
  date: Date,
  venue: String,
  result: String,
  scoreboard: { type: Object, default: {} }
});

export const Match = mongoose.model('Match', MatchSchema);
