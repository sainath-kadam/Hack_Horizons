import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './home.css';

const HomePage = () => {
    const [value,setValue] = useState();
    const navigate = useNavigate();
    const handleJoinRoom = useCallback(() =>{
        navigate(`/dash/room/${value}`)
    },[navigate,value])

    return (
        <div className='homee'>
            <input className="inputi" type="text" onChange={e => setValue(e.target.value)} placeholder="Enter Room Code"/>
            <button className="button" onClick={handleJoinRoom}>Join Room</button>
        </div>
    )
}

export default HomePage
