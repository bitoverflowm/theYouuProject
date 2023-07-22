import React from 'react';
import MovingVideoCard from '../UI/Cards/movingVideoCard';

const VideoComponent = ({ videoKey, media }) => {
    const videoUrl = `/api/videos?key=${videoKey}`

    return (
        <MovingVideoCard videoUrl={videoUrl} media={media} />
    )
}

export default VideoComponent