import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Allroom = () => {
    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/room/findallrooms`
                )

                setRooms(response.data.rooms || [])
            } catch (err) {
                setError(err.response?.data?.message || "Error fetching rooms")
            } finally {
                setLoading(false)
            }
        }

        fetchRooms()
    }, [])

    if (loading) return <h2>Loading...</h2>
    if (error) return <h3>{error}</h3>

    return (
        <div>
            <h2>All Rooms</h2>

            {rooms.length === 0 ? (
                <p>No rooms found</p>
            ) : (
                <table border="1" cellPadding="8">
                    <thead>
                        <tr>
                            <th>Room No</th>
                            <th>Capacity</th>
                            <th>AC</th>
                            <th>Washroom</th>
                            <th>Allocated</th>
                        </tr>
                    </thead>

                    <tbody>
                        {rooms.map((room) => (
                            <tr key={room._id}>
                                <td>{room.roomNo}</td>
                                <td>{room.capacity}</td>
                                <td>{room.hasAC ? 'Yes' : 'No'}</td>
                                <td>{room.hasAttachedWashroom ? 'Yes' : 'No'}</td>
                                <td>{room.allocated ? 'Yes' : 'No'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Allroom

