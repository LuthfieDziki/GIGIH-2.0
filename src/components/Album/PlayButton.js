import React from "react";
import spotifyy from "../../data/spotifyy.json";

const PlayButton = () => {
  return (
    <div className="button">
      <a className="btn" role="button" href={spotifyy.uri}>
        Select
      </a>
    </div>
  );
};

export default PlayButton;
