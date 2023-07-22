
import React, { useState } from 'react'
import ReactPlayer from 'react-player'


const MovingVideoCard = ({videoUrl, media}) => {
    const [playing, setPlaying] = useState(false)
    
    const handleMouseEnter = () => {
        setPlaying(true)
    }

    const handleMouseLeave = () => {
        setPlaying(false)
    }

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='rounded-2xl relative overflow-hidden'>
            <ReactPlayer
                url={videoUrl}
                playing = {playing}
                width="100%"
                height="100%"
                loop
                muted = {media ? false : true}
                onError={(e) => {
                    console.error("Video playback error:", e);
                  }}
            />
        </div>
    )
}

export default MovingVideoCard