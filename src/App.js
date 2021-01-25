import React, { useEffect} from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  // UseContext or DataLayer access
  const [{ user,token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    // To make access_token safe
    window.location.hash = "";
    // Accessing the token
    const _token = hash.access_token;
    // Setting to state
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token:_token
      })
    
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
    // console.log("i have a token ", _token);
  }, [dispatch]);

  // console.log(user);
  // console.log("my token",token);

  return <div className="app">{token ? <Player spotify={spotify} /> : <Login />}</div>;
}

export default App;
