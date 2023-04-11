
import React, { useState } from 'react'
import ReactPlayer from 'react-player'



const MovingVideoCard = ({videoUrl}) => {
    const [playing, setPlaying] = useState(false)
    
    const handleMouseEnter = () => {
        setPlaying(true)
    }

    const handleMouseLeave = () => {
        setPlaying(false)
    }

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ReactPlayer
                url={videoUrl}
                playing = {playing}
                width="100%"
                height="100%"
                loop
                onError={(e) => {
                    console.error("Video playback error:", e);
                  }}
            />
        </div>
    )
}

export default MovingVideoCard