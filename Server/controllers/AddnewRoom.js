
import Room from '../model/User.js';
const AddRoom = async (req, res) => {
    try {
        const { roomNo, capacity, hasAC, hasAttachedWashroom } = req.body;
        const existingRoom = await Room.findOne({ roomNo: roomNo });
        if (existingRoom) {
            return res.status(400).json({ message: "Room with this number already exists" });
        }
        const newRoom = new Room({
            roomNo,
            capacity,
            hasAC,
            hasAttachedWashroom
        });
        await newRoom.save();
        res.status(201).json({ message: "Room added successfully", room: newRoom });

    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server Error" })
    }
}
export default AddRoom;