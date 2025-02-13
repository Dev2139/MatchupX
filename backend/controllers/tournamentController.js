import Tournament from '../models/Tournament.js';

export const getAllTournaments = async (req, res) => {
    const tournaments = await Tournament.find();
    res.json(tournaments);
};

export const createTournament = async (req, res) => {
    const { name, teams } = req.body;
    const newTournament = new Tournament({ name, teams });
    await newTournament.save();
    res.status(201).json(newTournament);
};

export const updateTournament = async (req, res) => {
    const { id } = req.params;
    const updatedTournament = await Tournament.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedTournament);
};

export const deleteTournament = async (req, res) => {
    const { id } = req.params;
    await Tournament.findByIdAndDelete(id);
    res.status(204).send();
};
