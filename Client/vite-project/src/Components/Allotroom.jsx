import React, { useState } from 'react'
import axios from 'axios'

const Allotroom = () => {
    const [studentCount, setStudentCount] = useState('')
    const [needAC, setNeedAC] = useState(false)
    const [needWashroom, setNeedWashroom] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/room/allot/room`,
                {
                    studentCount: Number(studentCount),
                    needAC,
                    needWashroom
                }
            )

            alert(response.data.message || "Room allotted successfully")

            setStudentCount('')
            setNeedAC(false)
            setNeedWashroom(false)

        } catch (err) {
            alert(err.response?.data?.message || "Error allotting room")
        } finally {
            setLoading(false)
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

                <button type="submit" disabled={loading}>
                    {loading ? "Allocating..." : "Allot Room"}
                </button>
            </form>
        </div>
    )
}

export default Allotroom
