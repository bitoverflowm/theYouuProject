
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
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='relative aspect-w-9 aspect-h-16 bg-gray-200 overflow-hidden'>
            <ReactPlayer
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full object-cover"
                url={videoUrl}
                playing = {playing}
                width="100%"
                height="100%"
                loop
                muted
                onError={(e) => {
                    console.error("Video playback error:", e);
                  }}
            />
        </div>
    )
}

export default MovingVideoCard