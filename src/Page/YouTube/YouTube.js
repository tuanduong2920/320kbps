import {Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchComponent from "../../components/Search/SearchComponent";
import {youTubeSelector, getSongByName, visibilitySearchList as visibility } from "../../features/searchSlice/youTubeSlice";

const YouTube = () => {
    const { searchList } = useSelector(youTubeSelector);
  //   console.log("searchList", searchList);

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
        Mp3 on YouTube
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

export default YouTube;
