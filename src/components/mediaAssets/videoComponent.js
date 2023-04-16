import React from 'react';
import MovingVideoCard from '../UI/Cards/movingVideoCard';

const VideoComponent = ({ videoKey }) => {
    const videoUrl = `/api/videos?key=${videoKey}`

    return (
        <MovingVideoCard videoUrl={videoUrl} />
    )
}

export default VideoComponent