import { Grid, Paper, Typography, Box, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import GetAppIcon from '@material-ui/icons/GetApp';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import React from "react";
import { addCurrentSong} from "../../../features/songSlice/songSlice";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: 115,
        width: `100%`

    },
    detail: {
        textAlign: "start",
        padding: 6,

    }

})

const Item = ({ name, artist, thumb, id }) => {
    const classes = useStyles();

    const dispath = useDispatch();
    const playSong = (id) => {
        console.log(id)
        dispath(addCurrentSong(id));
    }

    return (
        <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Paper className={classes.root} square elevation={3}  >
                <Grid item xs={4}  >
                    <img height='115' alt="img" width='100%' src={'https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/' + thumb} />
                </Grid>
                <Grid className={classes.detail} item xs={8}>
                    <Typography style={{
                        textTransform: 'capitalize', fontSize: 22, display: 'inline-block', whiteSpace: `nowrap`,
                        overflow: `hidden`,
                        width: `100%`,
                        textOverflow: `ellipsis`
                    }} variant="h6" component="h6">{name}</Typography>
                    <Typography style={{
                        fontSize: 14, textTransform: 'capitalize', display: 'inline-block', whiteSpace: `nowrap`,
                        overflow: `hidden`,
                        width: `100%`,
                        textOverflow: `ellipsis`
                    }} variant="subtitle1">{artist}</Typography>
                    <Box display="flex" spacing={2} justifyContent='center'>
                        <IconButton aria-label="Play" onClick={() => playSong(id)} ><PlayCircleFilledIcon color="secondary" /></IconButton>
                        <IconButton aria-label="Add to playlist"><AddCircleIcon color="secondary" /></IconButton>
                        <IconButton aria-label="Download"><GetAppIcon color="secondary" /></IconButton>
                    </Box>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Item