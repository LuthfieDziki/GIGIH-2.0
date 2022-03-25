import "./style/App.css";
import Album from "./components/Album/index";
import spotify from "./data/spotify.json";

function App() {
  return (
    <div className="header">
      <h2>Song</h2>
      <div className="playlist">
        <Album
          image={spotify.album.images[0].url}
          name={spotify.album.name}
          type={spotify.album.type}
          artist={spotify.album.artists[0].name}
        />

        {/* <img src={data.album.images[0].url} alt="true" />
        <p>{data.album.name}</p>
        <p>{data.artists[0].name}</p>
        */}
      </div>
    </div>
  );
}

export default App;
