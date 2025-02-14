import Match from '../models/Match.js';

export const getScoreboard = async (req, res) => {
    const scores = await Match.find().select('teams result'); // Adjust fields as necessary
    res.json(scores);
};

export const updateMatchScore = async (req, res) => {
    const { id } = req.params;
    const { result } = req.body;
    const updatedMatch = await Match.findByIdAndUpdate(id, { result }, { new: true });
    res.json(updatedMatch);
};
