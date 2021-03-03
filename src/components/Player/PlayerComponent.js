
import React from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { localhost, myProxy } from "../../env";

import './Player.css';

const PlayerComponent = ({ id }) => {



    const src = `${localhost}/stream/?url=http://api.mp3.zing.vn/api/streaming/audio/${id}/320`;
    // console.log(src)

    return (
      
        <div className="player-component">
            <AudioPlayer
                
                src={src}
                onPlay={e => console.log("onPlay")}
                onEnded={e => console.log("end")}
                showSkipControls
                showJumpControls={false}
                
                showFilledVolume={true}
                layout="horizontal"

                customAdditionalControls={[]}
                customVolumeControls={[]}
         
            />
        </div>

    )
}

export default PlayerComponent