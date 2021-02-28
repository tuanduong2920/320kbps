import { makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import ListItemComponent from "../ListItem/ListItemComponent";
import { songSelector ,visibilitySearchList,getSongByName } from "../../features/songSlice/songSlice"
import { useDispatch,useSelector } from "react-redux";


const useStyles = makeStyles({
    root: {
        '& .MuiFilledInput-root': {
            borderRadius: `unset`
        }
    },

})

const SearchComponent = () => {
    const [searchString, setSearchString] = useState("")
    const classes = useStyles();

    const dispath = useDispatch();

    const {searchList} = useSelector(songSelector);
    

    const handleSearch = (e) => {
        e.preventDefault();

        const search_key = searchString.trim(); 
        if(search_key === ""){
            return
        }
        // console.log(searchString);
        dispath(getSongByName(search_key));
        dispath(visibilitySearchList());

        setSearchString("");
    }

    return (
        <>
            <div style={{ marginBottom: `22px` }}>
                <form onSubmit={handleSearch}>
                    <TextField color="secondary" value={searchString} onChange={(e) => { setSearchString(e.target.value) }} className={classes.root} variant="filled"
                        label="What's song you want?" style={{ width: '80%' }}></TextField>
                </form>

            </div>
            <ListItemComponent {...searchList} ></ListItemComponent>


        </>

    )

}


export default SearchComponent;