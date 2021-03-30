import { Button, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
// import SearchComponent from "../../components/Search/SearchComponent";
import { test as ts } from "../../features/searchSlice/soundCloudSlice";

const SoundCloud = () => {
  //   const { searchList } = useSelector(mp3Selector);
  //   console.log("searchList", searchList);

  const dispatch = useDispatch();

  const test = () => {
    dispatch(ts());
  };

  //   const isVisibility = async () => {
  //     await dispatch(visibility());
  //   };

  //   const getSong = async (searchString) => {
  //     await dispatch(getSongByName(searchString));
  //   };

  return (
    <>
      <Typography
        variant="h3"
        component="div"
        style={{ padding: "80px", fontWeight: "bold", color: `whitesmoke` }}
      >
        Music on Sound Clound
      </Typography>
      <Button color="secondary" variant="outlined" onClick={() => test()}>
        Test
      </Button>
      {/* <div className="search-component">
        <SearchComponent
          visibilitySearchList={isVisibility}
          getSongByName={getSong}
          {...searchList}
        />
      </div> */}
    </>
  );
};

export default SoundCloud;
