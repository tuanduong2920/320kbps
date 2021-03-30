import React from "react";
import "./App.css";
import "fontsource-roboto";
import Routes from "./router";

import { useSelector } from "react-redux";
import { songSelector } from "./features/songSlice/songSlice";
import AppHeader from "./components/AppHeader/Appheader";
// import ZingMp3 from "./Page/ZingMp3/ZingMp3";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Suspense } from "react";
import PlayerComponent from "./components/Player/PlayerComponent";
import { CircularProgress  } from "@material-ui/core";

function App() {
  const { queueList, currentSong } = useSelector(songSelector);

  return (
    <Router basename="320kbps" >
      <div className="App">
        <AppHeader playlist={queueList} />

        <div className="app-main">
          <Suspense fallback={<CircularProgress  color="secondary" ></CircularProgress >}>
            <Switch>
              {Routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                />
              ))}
            </Switch>
          </Suspense>

          <PlayerComponent {...currentSong} />
          {/* <ZingMp3></ZingMp3> */}
        </div>
        <div className="app-footer"></div>
      </div>
    </Router>
  );
}

export default App;
