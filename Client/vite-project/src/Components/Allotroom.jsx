import React, { useState } from 'react'
import axios from 'axios'

const Allotroom = () => {
    const [studentCount, setStudentCount] = useState('')
    const [needAC, setNeedAC] = useState(false)
    const [needWashroom, setNeedWashroom] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:9923/room/allot/room',
                { studentCount, needAC, needWashroom },
                { withCredentials: true }
            )

            alert(response.data.message)
            console
            setStudentCount('')
            setNeedAC(false)
            setNeedWashroom(false)
        } catch (err) {
            alert(err.response?.data?.message || 'Error allotting room')
        }
    }

    return (
        <div>
            <h2>Allot Room</h2>
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
                <button type="submit">Allot Room</button>
            </form>
        </div>
    )
}

export default Allotroom
