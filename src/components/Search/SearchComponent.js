import {
  makeStyles,
  LinearProgress,
  Box,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import ListItemComponent from "../ListItem/ListItemComponent";
import {
  songSelector,
  visibilitySearchList,
  getSongByName,
} from "../../features/songSlice/songSlice";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    "& .MuiFilledInput-root": {
      borderRadius: `unset`,
    },
  },
});

const SearchComponent = () => {
  const [searchString, setSearchString] = useState("");
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const dispath = useDispatch();

  const { searchList } = useSelector(songSelector);

  const handleSearch = async (e) => {
    e.preventDefault();

    setLoading(true);

    const search_key = searchString.trim();
    if (search_key === "") {
      return;
    }

    await dispath(getSongByName(search_key));
    await dispath(visibilitySearchList());

    setLoading(false);

    setSearchString("");
  };

  return (
    <>
      <div style={{ marginBottom: `22px` }}>
        <form onSubmit={handleSearch}>
          <TextField
            color="secondary"
            value={searchString}
            onChange={(e) => {
              setSearchString(e.target.value);
            }}
            className={classes.root}
            variant="filled"
            label="What's song you want?"
            style={{ width: "80%" }}
          ></TextField>
        </form>
      </div>
      <div style={{ minHeight: 275 }}>
        {loading === true ? (
          <Box display="flex" justifyContent="center" my={15}>
            <LinearProgress style={{ width: `80%` }} color="secondary" />
          </Box>
        ) : (
            <ListItemComponent
              {...searchList}
              loading={loading}
            ></ListItemComponent>
        )}
      </div>
    </>
  );
};

export default SearchComponent;
