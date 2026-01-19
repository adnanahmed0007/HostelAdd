
import express from 'express';
import mongoose from 'mongoose';
import Room from '../model/User.js';
const findAllRoom = async (req, res) => {
    try {
        const findallRooms = await Room.find({});
        if (findallRooms.length === 0) {
            return res.status(404).json({ message: "No rooms found" });
        }
        res.status(200).json({ rooms: findallRooms });
        console.log(findallRooms);


    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server Error" })
    }
}
export default findAllRoom;