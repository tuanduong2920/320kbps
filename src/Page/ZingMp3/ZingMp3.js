import React from "react";
import SearchComponent from "../../components/Search/SearchComponent";

import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import {
  mp3Selector,
  visibilitySearchList as visibility,
  getSongByName,
} from "../../features/searchSlice/zingMp3Slice";

const ZingMp3 = () => {
  const { searchList } = useSelector(mp3Selector);
  

  const dispatch = useDispatch();

  const isVisibility = async () => {
    await dispatch(visibility());
  };

  const getSong = async (searchString) => {
    await dispatch(getSongByName(searchString));
  };

  return (
    <>
      <Typography
        variant="h3"
        component="div"
        style={{ padding: "80px", fontWeight: "bold", color: `whitesmoke` }}
      >
        Music with 320KBps
      </Typography>
      <div className="search-component">
        <SearchComponent
          visibilitySearchList={isVisibility}
          getSongByName={getSong}
          {...searchList}
        />
      </div>
    </>
  );
};

export default ZingMp3;
