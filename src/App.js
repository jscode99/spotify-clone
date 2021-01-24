import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    // To make access_token safe
    window.location.hash = "";
    // Accessing the token
    const _token = hash.access_token;
    // Setting to state
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        console.log(user);
      });
    }
    console.log("i have a token ", _token);
  }, []);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;

