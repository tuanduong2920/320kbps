import React from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const PlayerComponent = ({id}) => {
    const src = `http://api.mp3.zing.vn/api/streaming/audio/${id}/320`;
    return (<AudioPlayer
        src={src}
        onPlay={e => console.log("onPlay")}
        onEnded={e => console.log("end")}
        showSkipControls
        showJumpControls={false}
    />)
}

export default PlayerComponent