import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  ListItem,
  ListItemIcon,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

import { IoMdMusicalNote } from "react-icons/io";
import { makeStyles } from "@material-ui/core/styles";
import NavigationBar from "../NavigationBar/NavigationBar";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import RemoveIcon from "@material-ui/icons/Remove";
import {
  addCurrentSong as adcrs,
  removeSong as rm,
} from "../../features/songSlice/songSlice";
import { useDispatch } from "react-redux";
import Router from "../../router";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  textOver: {
    width: `100%`,
    display: "inline-block",
    whiteSpace: `nowrap`,
    overflow: `hidden`,
    textOverflow: `ellipsis`,
    color: `#fff`,
  },
}));

const AppHeader = ({ playlist }) => {
  const [isShowList, setShowList] = useState(false);
  const [isShowNav, setShowNav] = useState(false);

  const dispatch = useDispatch();

  const classes = useStyles();

  const addCurrentSong = (item) => {
    dispatch(adcrs(item));
  };

  const removeSong = (id) => {
    dispatch(rm(id));
  };

  return (
    <div className={classes.root}>
      <AppBar color="secondary">
        <Toolbar>
          <IconButton
            onClick={() => setShowNav(!isShowNav)}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>

          <Typography
            className={classes.title}
            variant="h5"
            style={{ color: "#ffff" }}
            component="h2"
          >
            320KBps
          </Typography>

          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => setShowList(!isShowList)}
          >
            <IoMdMusicalNote></IoMdMusicalNote>
          </IconButton>
          <NavigationBar
            anchor="left"
            setShowList={setShowNav}
            isShow={isShowNav}
          >
            <List>
              {Router.map((item, index) => (
                <NavLink key={index} to={item.path}>
                  <ListItem button style={{ color: `#fff` }}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.textOver,
                        secondary: classes.textOver,
                      }}
                      primary={item.name}
                    />
                  </ListItem>
                </NavLink>
              ))}
            </List>
            <Divider />
          </NavigationBar>

          <NavigationBar
            anchor="right"
            setShowList={setShowList}
            isShow={isShowList}
          >
            <List>
              {playlist.length > 0 ? (
                playlist.map((item, index) => (
                  <ListItem button key={index}>
                    <ListItemIcon
                      onClick={() => addCurrentSong(item)}
                      style={{ color: `#fff` }}
                    >
                      <PlayArrowIcon />
                    </ListItemIcon>
                    <ListItemText
                      onClick={() => addCurrentSong(item)}
                      classes={{
                        primary: classes.textOver,
                        secondary: classes.textOver,
                      }}
                      primary={item.name}
                      secondary={item.artist ? item.artist : null}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        onClick={() => removeSong(item.id)}
                        edge="end"
                        aria-label="delete"
                        style={{ color: `#fff` }}
                      >
                        <RemoveIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 300,
                    opacity: 0.6,
                  }}
                >
                  <Typography component="span" variant="subtitle2">
                    Null
                  </Typography>
                </div>
              )}
            </List>
          </NavigationBar>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppHeader;
