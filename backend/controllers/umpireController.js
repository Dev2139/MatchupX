import Match from '../models/Match.js';

export const getUmpires = async (req, res) => {
    // Logic to get umpires (if applicable)
    res.json({ message: "List of umpires" });
};

export const addUmpire = async (req, res) => {
    // Logic to add an umpire (if applicable)
    res.status(201).json({ message: "Umpire added successfully" });
};

export const updateUmpire = async (req, res) => {
    const { id } = req.params;
    // Logic to update an umpire (if applicable)
    res.json({ message: "Umpire updated successfully" });
};

export const getAssignedMatches = async (req, res) => {
    const { userId } = req.auth.payload; // Assuming user ID is in the token
    const matches = await Match.find({ umpire: userId });
    res.json(matches);
};

export const updateMatchScore = async (req, res) => {
    const { id } = req.params;
    const { score } = req.body;
    const updatedMatch = await Match.findByIdAndUpdate(id, { score }, { new: true });
    res.json(updatedMatch);
};
