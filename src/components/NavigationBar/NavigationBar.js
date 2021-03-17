import {
  SwipeableDrawer,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
// import { IoMdPause, IoMdPlay, IoMdRemove } from "react-icons/io";


const useStyles = makeStyles({
  list: {
    width: 280,
  },
  fullList: {
    width: "auto",
  }
});

const NavigationBar = ({ anchor, isShow, setShowList, children }) => {
  const classes = useStyles();

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setShowList(open);
  };

  const list = () => (
    <div className={classes.list} role="presentation">
      {children}
    </div>
  );

  return (
    <>
      <SwipeableDrawer
        anchor={anchor}
        open={isShow}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </>
  );
};

export default NavigationBar;
