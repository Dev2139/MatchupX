import Player from '../models/Player.js';

export const getPlayers = async (req, res) => {
    const players = await Player.find();
    res.json(players);
};

export const addPlayer = async (req, res) => {
    const { name, role, basePrice } = req.body;
    const newPlayer = new Player({ name, role, basePrice });
    await newPlayer.save();
    res.status(201).json(newPlayer);
};

export const updatePlayer = async (req, res) => {
    const { id } = req.params;
    const { basePrice } = req.body;
    const updatedPlayer = await Player.findByIdAndUpdate(id, { basePrice }, { new: true });
    res.json(updatedPlayer);
};
