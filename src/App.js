import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu } from "@material-ui/icons";
import React from 'react';
import './App.css';
import 'fontsource-roboto';
import SearchComponent from './components/Search/SearchComponent';
import PlayerComponent from './components/Player/PlayerComponent';
import { useSelector } from 'react-redux';
import { songSelector } from './features/songSlice/songSlice'



function App() {
  const { currentSong } = useSelector(songSelector)

  return (
    <div className="App">
      <div className="App-header">
        <AppBar color="secondary">
          <Toolbar>
            <IconButton>
              <Menu />
            </IconButton>
            <Typography variant="h5" component="h2">
              320KBps
              </Typography>
          </Toolbar>
        </AppBar>

      </div>
      <div className="app-main">
        <Typography variant="h3" component="div" style={{ padding: "80px", fontWeight: 'bold', color: `whitesmoke` }}>Music with 320KBps</Typography>
        <div className="search-component" >
          <SearchComponent />
        </div>

        <PlayerComponent  {...currentSong} />

      </div>
      <div className="app-footer">
      </div>
    </div>


  );
}

export default App;
