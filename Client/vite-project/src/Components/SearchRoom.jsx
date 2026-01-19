import React, { useState } from 'react'
import axios from 'axios'

const SearchRoom = () => {
    const [studentCount, setStudentCount] = useState('')
    const [needAC, setNeedAC] = useState(false)
    const [needWashroom, setNeedWashroom] = useState(false)
    const [room, setRoom] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:9923/room/search/room',
                { StudentCount: studentCount, needAC, needWashroom },
                { withCredentials: true }
            )
            setRoom(response.data.room)
            alert(response.data.message)
        } catch (err) {
            alert(err.response?.data?.message || 'Error searching room')
            setRoom(null)
        }
    }

    return (
        <div>
            <h2>Search Room</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="Student Count" value={studentCount} onChange={(e) => setStudentCount(e.target.value)} required />
                <label>
                    <input type="checkbox" checked={needAC} onChange={(e) => setNeedAC(e.target.checked)} /> Need AC</label>
                <label><input type="checkbox" checked={needWashroom} onChange={(e) => setNeedWashroom(e.target.checked)} /> Need Washroom</label>
                <button type="submit">Search</button>
            </form>
            {room && (
                <div>
                    <h3>Room Found:</h3>
                    <p>Room No: {room.roomNo}</p>
                    <p>Capacity: {room.capacity}</p>
                    <p>AC: {room.hasAC ? 'Yes' : 'No'}</p>
                    <p>Washroom: {room.hasAttachedWashroom ? 'Yes' : 'No'}</p>
                </div>
            )}
        </div>
    )
}

export default SearchRoom
