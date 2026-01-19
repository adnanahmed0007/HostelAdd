import React, { useState } from 'react'
import "./Addroom.css"
import axios from 'axios'

const AddRoom = () => {
    const [roomNo, setRoomNo] = useState('')
    const [capacity, setCapacity] = useState('')
    const [hasAC, setHasAC] = useState(false)
    const [hasAttachedWashroom, setHasAttachedWashroom] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:9923/room/add/rooms',
                { roomNo, capacity, hasAC, hasAttachedWashroom },
                { withCredentials: true }
            )
            alert(response.data.message)
            console.log(response.data)
            setRoomNo('')
            setCapacity('')
            setHasAC(false)
            setHasAttachedWashroom(false)
        } catch (err) {
            alert(err.response?.data?.message || 'Error adding room')
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
                <button type="submit">Add Room</button>
            </form>
        </div>
    )
}

export default AddRoom
