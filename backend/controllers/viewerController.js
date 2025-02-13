import Tournament from '../models/Tournament.js';
import Match from '../models/Match.js';

export const getViewers = async (req, res) => {
    // Logic to get viewers (if applicable)
    res.json({ message: "List of viewers" });
};

export const addViewer = async (req, res) => {
    // Logic to add a viewer (if applicable)
    res.status(201).json({ message: "Viewer added successfully" });
};

export const updateViewer = async (req, res) => {
    const { id } = req.params;
    // Logic to update a viewer (if applicable)
    res.json({ message: "Viewer updated successfully" });
};

export const getViewerTournaments = async (req, res) => {
    const tournaments = await Tournament.find();
    res.json(tournaments);
};

export const getViewerMatches = async (req, res) => {
    const matches = await Match.find();
    res.json(matches);
};

export const getViewerScoreboard = async (req, res) => {
    const scores = await Match.find().select('teams result'); // Adjust fields as necessary
    res.json(scores);
};
