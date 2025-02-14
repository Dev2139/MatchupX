import Auction from '../models/Auction.js';

export const getAllAuctions = async (req, res) => {
    const auctions = await Auction.find();
    res.json(auctions);
};

export const createAuction = async (req, res) => {
    const { player, highestBid, highestBidder } = req.body;
    const newAuction = new Auction({ player, highestBid, highestBidder });
    await newAuction.save();
    res.status(201).json(newAuction);
};

export const placeBid = async (req, res) => {
    const { auctionId, bidAmount } = req.body;
    const auction = await Auction.findById(auctionId);
    if (bidAmount > auction.highestBid) {
        auction.highestBid = bidAmount;
        auction.highestBidder = req.auth.payload.email; // Assuming email is used for identification
        await auction.save();
        res.json(auction);
    } else {
        res.status(400).json({ message: 'Bid amount must be higher than the current highest bid.' });
    }
};
