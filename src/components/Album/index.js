import React from "react";
import PlayButton from "./PlayButton";
import AlbumImage from "./AlbumImage";
import AlbumTitle from "./AlbumTitle";

const Album = (props) => {
  return (
    <div className="Album-item">
      <AlbumImage image={props.image} />
      <AlbumTitle name={props.name} type={props.type} artist={props.artist} />
      <PlayButton />
    </div>
  );
};

export default Album;
