import { makeStyles, LinearProgress, Box, TextField } from "@material-ui/core";
import React, { useState } from "react";
import ListItemComponent from "../ListItem/ListItemComponent";


const useStyles = makeStyles({
  root: {
    "& .MuiFilledInput-root": {
      borderRadius: `unset`,
    },
  },
});

const SearchComponent = ({ list, visibility , getSongByName, visibilitySearchList}) => {
  const [searchString, setSearchString] = useState("");
  const [loading, setLoading] = useState(false);
  const classes = useStyles();



  const handleSearch = async (e) => {
    e.preventDefault();

    setLoading(true);

    const search_key = searchString.trim();
    if (search_key === "") {
      return;
    }

    await getSongByName(search_key);
    await visibilitySearchList();

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
            list={list}
            visibility={visibility}
            // {...searchList}
            loading={loading}
          ></ListItemComponent>
        )}
      </div>
    </>
  );
};

export default SearchComponent;
