export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Remove it after development
  token:
    "BQAgD7nrDFAYpsC8Ls6Mt6BGc93am999g6s6Bw1MtmjXPFPpDuHzL0Q5FQxJpRIDg9HHEdGn9fgDSZiHOozHOswikgAS4CrpBt6A_5H8tsJyCc6HRoCQbIBGTjlBMdPWBey6sRbiMiI6RgkmkyHaY0TEdqgNry9BHvnXF_5JMyccx-eyKZY-",
};

const Reducer = (state, action) => {
  console.log(action);

  // Action -> type,[payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlist:action.playlist
      }

    default:
      return state;
  }
};

export default Reducer;
