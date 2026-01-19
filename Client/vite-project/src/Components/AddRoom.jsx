import React, { useState } from 'react'
import "./Addroom.css"
import axios from 'axios'

const AddRoom = () => {
    const [roomNo, setRoomNo] = useState('')
    const [capacity, setCapacity] = useState('')
    const [hasAC, setHasAC] = useState(false)
    const [hasAttachedWashroom, setHasAttachedWashroom] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/room/add/rooms`,
                {
                    roomNo,
                    capacity: Number(capacity),
                    hasAC,
                    hasAttachedWashroom
                }
            )

            alert(response.data.message || "Room added successfully")

            setRoomNo('')
            setCapacity('')
            setHasAC(false)
            setHasAttachedWashroom(false)

        } catch (err) {
            alert(err.response?.data?.message || "Error adding room")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <h2>Add Room</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Room Number"
                    value={roomNo}
                    onChange={(e) => setRoomNo(e.target.value)}
                    required
                />

                <input
                    type="number"
                    placeholder="Capacity"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    required
                />

                <label>
                    <input
                        type="checkbox"
                        checked={hasAC}
                        onChange={(e) => setHasAC(e.target.checked)}
                    />
                    Has AC
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={hasAttachedWashroom}
                        onChange={(e) => setHasAttachedWashroom(e.target.checked)}
                    />
                    Has Washroom
                </label>

                <button type="submit" disabled={loading}>
                    {loading ? "Adding..." : "Add Room"}
                </button>
            </form>
        </div>
    )
}

export default AddRoom
