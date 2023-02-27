import YouTube from "react-youtube";


const YoutubeViewer = ({ chapter, videoURL }) => {
    const opts = {
        height: "390",
        width: "640",
        playerVars: {
        // https://developers.google.com/youtube/player_parameters
        //autoplay: 1,
        },
    };
    
    return (
        <div>
            <YouTube videoId={videoURL} opts={opts} />
        </div>
    );
}

export default YoutubeViewer