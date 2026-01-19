import mongoose from "mongoose";


const roomSchema = new mongoose.Schema({
    roomNo: {
        type: String,
        required: true,
        unique: true
    },
    capacity: {
        type: Number,
        required: true
    },
    hasAC: {
        type: Boolean,
        default: false
    },
    hasAttachedWashroom: {
        type: Boolean,
        default: false
    },
    allocated: {
        type: Boolean,
        default: false
    }
});
const Room = mongoose.model('Room', roomSchema);
export default Room;