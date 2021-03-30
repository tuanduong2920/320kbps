import {
  Grid,
  Paper,
  Typography,
  Box,
  IconButton,
  Zoom,
} from "@material-ui/core";
import fileDownLoad from "js-file-download";
import { makeStyles } from "@material-ui/styles";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import React from "react";
import {
  addQueueAndPlay as addAndPlay,
  addQueue as aq,
} from "../../../features/songSlice/songSlice";
import { useDispatch } from "react-redux";

import axiosClient from "../../../api/axiosClient";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: 115,
    width: `100%`,
  },
  detail: {
    textAlign: "start",
    padding: 6,
  },
});

const Item = ({ name, artist, thumb, id, src }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const addQueueAndPlay = () => {
    const currentSong = { id, name, artist, thumb, src };
    dispatch(addAndPlay(currentSong));
  };

  const addQueue = () => {
    const currentSong = { id, name, artist, thumb, src };
    dispatch(aq(currentSong));
  };

  const downLoadAudio = async () => {
    const res = await axiosClient.get(src);
    fileDownLoad(res, `${name}.mp3`);
  };

  return (
    <Zoom in={true} timeout={1000}>
      <Grid item xs={12} sm={6} lg={4} xl={3}>
        <Paper className={classes.root} square elevation={3}>
          <Grid item xs={4}>
            <img height="115" alt="img" width="100%" src={thumb} />
          </Grid>
          <Grid className={classes.detail} item xs={8}>
            <Typography
              style={{
                textTransform: "capitalize",
                fontSize: 22,
                display: "inline-block",
                whiteSpace: `nowrap`,
                overflow: `hidden`,
                width: `100%`,
                textOverflow: `ellipsis`,
              }}
              variant="h6"
              component="h6"
            >
              {name}
            </Typography>
            <Typography
              style={{
                fontSize: 14,
                textTransform: "capitalize",
                display: "inline-block",
                whiteSpace: `nowrap`,
                overflow: `hidden`,
                width: `100%`,
                textOverflow: `ellipsis`,
              }}
              variant="subtitle1"
            >
              {artist}
            </Typography>
            <Box display="flex" spacing={2} justifyContent="center">
              <IconButton aria-label="Play" onClick={() => addQueueAndPlay()}>
                <PlayCircleFilledIcon color="secondary" />
              </IconButton>
              <IconButton
                aria-label="Add to playlist"
                onClick={() => addQueue()}
              >
                <AddCircleIcon color="secondary" />
              </IconButton>
              <IconButton aria-label="Download" onClick={() => downLoadAudio()}>
                <GetAppIcon color="secondary" />
              </IconButton>
            </Box>
          </Grid>
        </Paper>
      </Grid>
    </Zoom>
  );
};

export default Item;
