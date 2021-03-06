import React, { useEffect, useRef, useState } from "react";
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
import { useDispatch } from "react-redux";
import {
  nextSong as nex,
  preSong as pre,
} from "../../features/songSlice/songSlice";

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

const PlayerComponent = ({ src, name, thumb, artist }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);
  const [isLoop, setLoop] = useState(false);

  const dispatch = useDispatch();

  const [volume, setVolume] = useState({
    show: false,
    value: 1,
  });

  const audioRef = useRef();

  const handleLoadData = () => {
    setDuration(audioRef.current.duration);
    setCurrentTime(0);
    setPlay(true);
    audioRef.current.play();
  };

  const handleTimeSliderChange = (e, v) => {
    console.log(v);
    audioRef.current.currentTime = v;
    // setCurrentTime(v);
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
    if (isLoop) return;
  };

  const nextSong = () => {
    dispatch(nex());
  };

  const preSong = () => {
    dispatch(pre());
  };

  // const src = `${myProxy}stream/?url=http://api.mp3.zing.vn/api/streaming/audio/${id}/320`;

  return src !== undefined ? (
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
                <img src={thumb} alt="pre-img" />
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
              <CustomIconButton size="medium" onClick={() => preSong()}>
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
              <CustomIconButton size="medium" onClick={() => nextSong()}>
                <IoMdSkipForward className="action-icon" />
              </CustomIconButton>
              <div style={{ position: "relative", display: "inline-block" }}>
                <CustomIconButton size="medium" onClick={() => toggleVolume()}>
                  {volume.value > 0.5 ? (
                    <IoMdVolumeHigh className="action-icon"></IoMdVolumeHigh>
                  ) : volume.value < 0.5 && volume.value > 0 ? (
                    <IoMdVolumeLow className="action-icon"></IoMdVolumeLow>
                  ) : (
                    <IoMdVolumeMute className="action-icon"></IoMdVolumeMute>
                  )}
                </CustomIconButton>

                <Fade in={volume.show} timeout={1000}>
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
                      style={{ padding: `0 13px` }}
                      orientation="vertical"
                      color="secondary"
                      value={volume.value}
                      max={1}
                      step={0.01}
                      onChange={(event, value) => handleChangeVolume(value)}
                    />
                  </span>
                </Fade>
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
