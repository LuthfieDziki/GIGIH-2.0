import React from "react";
import spotify from "../../data/spotify.json";

const PlayButton = () => {
  return (
    <div className="button">
      <a className="btn" role="button" href={spotify.uri}>
        Select
      </a>
    </div>
  );
};

export default PlayButton;
