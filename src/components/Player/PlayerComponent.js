import React, { useRef, useState } from "react";

import "react-h5-audio-player/lib/styles.css";
import { myProxy } from "../../env";
import {
  IoMdPlay,
  IoMdPause,
  IoMdSkipForward,
  IoMdSkipBackward,
  IoMdVolumeHigh,
  IoMdVolumeLow,
  IoMdVolumeMute,
  IoMdRepeat,
} from "react-icons/io";

import "./Player.css";
import {
  Container,
  Fade,
  Grid,
  Slider,
  Typography,
  Box,
  IconButton,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { VolumeUp } from "@material-ui/icons";

const CustomSlier = withStyles({
  root: {
    position: "absolute",
    padding: "unset",
    left: 0,
  },
  thumb: {
    display: "none",
  },
})(Slider);

const CustomIconButton = withStyles({
  root: {
    padding: `unset`,
  },
})(IconButton);

const PlayerComponent = ({ id, name, thumb, artist }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);
  const [isLoop, setLoop] = useState(false);

  const [volume, setVolume] = useState({
    show: false,
    value: 0.5,
  });

  const audioRef = useRef();

  const handleLoadData = () => {
    setDuration(audioRef.current.duration);
    setCurrentTime(0);
    setPlay(true);
    audioRef.current.play();
  };

  const handleTimeSliderChange = (e, v) => {
    audioRef.current.currentTime = v;
    setCurrentTime(v);
    if (!isPlay) {
      setPlay(true);
      audioRef.current.play();
    }
  };

  const handleChangeVolume = (v) => {
    setVolume({ ...volume, value: v });
    audioRef.current.volume = volume.value;
  };

  const toggleVolume = () => {
    setVolume({ ...volume, show: !volume.show });
  };

  const toggleLoop = () => {
    setLoop(!isLoop);
  };

  const togglePlay = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!isPlay);
  };

  const handleEnded = () => {
    if(isLoop) return;
    


  };

  const src = `${myProxy}stream/?url=http://api.mp3.zing.vn/api/streaming/audio/${id}/320`;

  return id !== undefined ? (
    <Fade in={true}>
      <div className="player-component">
        <audio
          loop={isLoop}
          ref={audioRef}
          src={src}
          onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
          onEnded={() => handleEnded()}
          onLoadedData={handleLoadData}
        ></audio>

        <div className="audio-player-container">
          <CustomSlier
            value={currentTime}
            max={duration}
            step={1}
            onChange={(e, v) => handleTimeSliderChange(e, v)}
            color="secondary"
          />

          <Container className="audio-player" maxWidth="lg">
            <Grid item sm={6} className="song-info">
              <Box display="flex" position="relative" className="img-thub">
                <img
                  src={
                    "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/" + thumb
                  }
                  alt="pre-img"
                />
                <IoMdRepeat
                  onClick={() => toggleLoop()}
                  style={isLoop ? { color: `#f50057` } : {}}
                  className="action-icon in-image"
                />
              </Box>

              <Grid item className="song-info-string">
                <Typography
                  style={{
                    textTransform: "capitalize",
                    fontSize: 18,
                    display: "inline-block",
                    whiteSpace: `nowrap`,
                    overflow: `hidden`,
                    width: `100%`,
                    textOverflow: `ellipsis`,
                    color: "#ffff",
                  }}
                  component="h6"
                >
                  {name}
                </Typography>
                <Typography
                  style={{
                    textTransform: "capitalize",
                    fontSize: 13,
                    display: "inline-block",
                    whiteSpace: `nowrap`,
                    overflow: `hidden`,
                    width: `100%`,
                    textOverflow: `ellipsis`,
                    color: "#ffff",
                  }}
                  variant="subtitle1"
                >
                  {artist}
                </Typography>
              </Grid>
            </Grid>
            <Grid item sm={6} className="action">
              <CustomIconButton size="medium">
                <IoMdSkipBackward className="action-icon" />
              </CustomIconButton>
              {/* <IoMdPlay style={iconStyles} /> */}
              <CustomIconButton size="medium" onClick={() => togglePlay()}>
                {isPlay ? (
                  <IoMdPause className="action-icon" />
                ) : (
                  <IoMdPlay className="action-icon" />
                )}
              </CustomIconButton>
              <CustomIconButton size="medium">
                <IoMdSkipForward className="action-icon" />
              </CustomIconButton>
              <div style={{ position: "relative", display: "inline-block" }}>
                <CustomIconButton size="medium" onClick={() => toggleVolume()}>
                  <IoMdVolumeHigh className="action-icon"></IoMdVolumeHigh>
                </CustomIconButton>

                {volume.show && (
                  <Fade in={true} timeout={1000}>
                    <span
                      style={{
                        position: "absolute",
                        bottom: 40,
                        left: 10,
                        width: 28,
                        height: 90,
                        borderRadius: `50px`,
                        background: "whitesmoke",
                        padding: " 12px 0px ",
                      }}
                    >
                      <Slider
                        orientation="vertical"
                        color="secondary"
                        value={volume.value}
                        max={1}
                        step={0.01}
                        onChange={(event, value) => handleChangeVolume(value)}
                      />
                    </span>
                  </Fade>
                )}
              </div>

              {/* <IoMdVolumeLow style={iconStyles} />
        <IoMdVolumeMute style={iconStyles} /> */}
            </Grid>
          </Container>
        </div>
      </div>
    </Fade>
  ) : null;
};

export default PlayerComponent;
