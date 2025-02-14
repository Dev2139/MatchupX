import Match from '../models/Match.js';

export const getAllMatches = async (req, res) => {
    const matches = await Match.find();
    res.json(matches);
};

export const createMatch = async (req, res) => {
    const { teams, date, venue } = req.body;
    const newMatch = new Match({ teams, date, venue });
    await newMatch.save();
    res.status(201).json(newMatch);
};

export const updateMatch = async (req, res) => {
    const { id } = req.params;
    const updatedMatch = await Match.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedMatch);
};

export const deleteMatch = async (req, res) => {
    const { id } = req.params;
    await Match.findByIdAndDelete(id);
    res.status(204).send();
};
