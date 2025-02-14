import mongoose from 'mongoose';

const AuctionSchema = new mongoose.Schema({
  player: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
  highestBid: Number,
  highestBidder: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  isCompleted: Boolean
});

export const Auction = mongoose.model('Auction', AuctionSchema);
