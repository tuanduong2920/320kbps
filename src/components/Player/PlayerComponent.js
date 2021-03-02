
import { makeStyles } from "@material-ui/styles";
import arrToAudio from 'arraybuffer-to-audiobuffer';
import axios from "axios";
import React, { useEffect } from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { alloworigin, myProxy } from "../../env";
import './Player.css';

const PlayerComponent = ({ id }) => {
    let src = `http://api.mp3.zing.vn/api/streaming/audio/${id}/320`;
    
    // useEffect(() => async () => {
    //     try {
    //         const res = await axios.get(myProxy, {
    //             headers: {
    //                 'Target-URL': `http://api.mp3.zing.vn/api/streaming/audio/${id}/320`,
    //                 'Accept': '*/*',
    //                 'Accept-Encoding':'gzip, deflate, br',
    //                 'Connection':''
    //             }
    //         })
    //         src = res;

    //     }
    //     catch (e) {
    //         console.log(e);
    //     }

    // })

    // const src = `${alloworigin}${encodeURIComponent(`http://api.mp3.zing.vn/api/streaming/audio/${id}/320`)}`;


    return (
        // <audio src={src} controls autoPlay/>
        <div className="player-component">
            <AudioPlayer
                // crossOrigin="use-credentials"
                src={src}
                onPlay={e => console.log("onPlay")}
                onEnded={e => console.log("end")}
                showSkipControls
                showJumpControls={false}
                // customProgressBarSection={["PROGRESS_BAR", "CURRENT_TIME"]}
                showFilledVolume={true}
                layout="horizontal"

                customAdditionalControls={[]}
                customVolumeControls={[]}
            // customControlsSection={[]}
            />
        </div>

    )
}

export default PlayerComponent