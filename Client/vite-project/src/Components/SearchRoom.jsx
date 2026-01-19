import React, { useState } from 'react'
import axios from 'axios'

const SearchRoom = () => {
    const [studentCount, setStudentCount] = useState('')
    const [needAC, setNeedAC] = useState(false)
    const [needWashroom, setNeedWashroom] = useState(false)
    const [room, setRoom] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setRoom(null)

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/room/search/room`,
                {
                    studentCount: Number(studentCount),
                    needAC,
                    needWashroom
                }
            )

            setRoom(response.data.room || null)
            alert(response.data.message || "Room found")

        } catch (err) {
            alert(err.response?.data?.message || "No room available")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <h2>Search Room</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Student Count"
                    value={studentCount}
                    onChange={(e) => setStudentCount(e.target.value)}
                    required
                />

                <label>
                    <input
                        type="checkbox"
                        checked={needAC}
                        onChange={(e) => setNeedAC(e.target.checked)}
                    />
                    Need AC
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={needWashroom}
                        onChange={(e) => setNeedWashroom(e.target.checked)}
                    />
                    Need Washroom
                </label>

                <button type="submit" disabled={loading}>
                    {loading ? "Searching..." : "Search"}
                </button>
            </form>

            {room && (
                <div>
                    <h3>Room Found</h3>
                    <p><b>Room No:</b> {room.roomNo}</p>
                    <p><b>Capacity:</b> {room.capacity}</p>
                    <p><b>AC:</b> {room.hasAC ? 'Yes' : 'No'}</p>
                    <p><b>Washroom:</b> {room.hasAttachedWashroom ? 'Yes' : 'No'}</p>
                </div>
            )}
        </div>
    )
}

export default SearchRoom
