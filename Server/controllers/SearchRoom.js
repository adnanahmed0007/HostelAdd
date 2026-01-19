import Room from "../model/User.js";
const SerchROOM = async (req, res) => {
    try {
        const { StudentCount, needAC, needWashroom } = req.body;
        const filter = {
            capacity: { $gte: StudentCount },
            hasAC: needAC,
            hasAttachedWashroom: needWashroom

        };
        const room = await Room.findOne(filter).sort({ capacity: 1 });
        if (!room) {
            return res.status(404).json({
                message: "No room available"
            });
        }
        return res.status(200).json({
            message: "Room found",
            room
        });


    }
    catch (E) {
        console.log(E);
        res.status(500).json({ message: "Server Error" })
    }
}
export default SerchROOM;