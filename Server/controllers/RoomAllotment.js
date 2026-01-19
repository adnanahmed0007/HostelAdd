import Room from "../model/User.js";

const allotRoom = async (req, res) => {
    try {
        const { studentCount, needAC, needWashroom } = req.body;

        if (!studentCount || studentCount <= 0) {
            return res.status(400).json({
                message: "Student count must be greater than zero"
            });
        }

        const filter = {
            capacity: { $gte: studentCount },
            allocated: false
        };

        if (needAC === true) {
            filter.hasAC = true;
        }

        if (needWashroom === true) {
            filter.hasAttachedWashroom = true;
        }

        const room = await Room.findOne(filter).sort({ capacity: 1 });

        if (!room) {
            return res.status(404).json({
                message: "No room available"
            });
        }

        room.capacity -= studentCount;
        if (room.capacity === 0) {
            room.allocated = true;
        }
        room.capacity.save();

        await room.save();

        res.status(200).json({
            message: "Room allotted successfully",
            room
        });

    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Server Error" });
    }
};

export default allotRoom;
