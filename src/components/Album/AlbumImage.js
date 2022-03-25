import React from "react";

const AlbumImage = (props) => {
  return (
    <div className="image">
      <img src={props.image}></img>
      <div className="Item-image-shadow"></div>
    </div>
  );
};

export default AlbumImage;
