
import React from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { myProxy } from "../../env";
import { IoMdPlay, IoMdPause } from "react-icons/io";


import './Player.css';
import { Slider } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const iconStyles = { width: `24px`, height: `24px` }

const CustomSlier = withStyles({
    thumb: {
        display:'none',
    }
})(Slider);

const PlayerComponent = ({ id }) => {

    // const classes = useStyles();


    const src = `${myProxy}stream/?url=http://api.mp3.zing.vn/api/streaming/audio/${id}/320`;
    // console.log(src)

    return (

        <div className="player-component">
            <audio src={src} autoPlay></audio>
            {/* <AudioPlayer
                
                src={src}
                onPlay={e => console.log("onPlay")}
                onEnded={e => console.log("end")}
                showSkipControls
                showJumpControls={false}
                
                showFilledVolume={true}
                layout="horizontal"

                customAdditionalControls={[]}
                customVolumeControls={[]}
         
            /> */}
            <div className="audio-player-container">
                <div className="audio-processing" >
                    <CustomSlier color="secondary" />
                </div>
                <div className="song-info">
                    <img></img>
                    <div>
                        <h3></h3>
                        <h5></h5>
                    </div>
                </div>
                <div className="action">

                </div>
                <IoMdPlay style={iconStyles} />
                <IoMdPause style={iconStyles} />
            </div>
        </div>

    )
}

export default PlayerComponent