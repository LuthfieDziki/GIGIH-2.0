import React from "react";
import "./style/App.css";
import Song from "./components/Album/index";
import Data from "./data/spotify";

// Homework 5
// import spotifyy from "./data/spotifyy.json";

function App() {
  return (
    <div className="container">
      <div className="Header">
        <h1>Song Playlist</h1>
      </div>

      <div className="playlist">
        {Data.map((d) => (
          <Song
            image={d.album.images[0].url}
            album={d.name}
            artist={d.artists[0]?.name}
            title={d.album.name}
            key={d.album.name}
          />
        ))}
      </div>
    </div>
  );
}

// homework 5
//   return (
//     <div className="header">
//       <h2>Song</h2>
//       <div className="playlist">
//         <Album
//           image={spotifyy.album.images[0].url}
//           name={spotifyy.album.name}
//           type={spotifyy.album.type}
//           artist={spotifyy.album.artists[0].name}
//         />
//       </div>
//     </div>
//   );
// }

export default App;
