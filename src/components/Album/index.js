import React from "react";

// import PlayButton from "./PlayButton";
// import AlbumImage from "./AlbumImage";
// import AlbumTitle from "./AlbumTitle";

// const Album = (props) => {
//   return (
//     <div className="Album-item">
//       <AlbumImage image={props.image} />
//       <AlbumTitle name={props.name} type={props.type} artist={props.artist} />
//       <PlayButton />
//     </div>
//   );
// };
// export default Album;

// Homework 6
function Song(props) {
  return (
    <div className="row">
      <div className="card-song">
        <img src={props.image} alt="true" />
        <h1>{props.title}</h1>
        <h2>Album : {props.album}</h2>
        <h2>Artist : {props.artist}</h2>
        <button className="btn">Select</button>
      </div>
    </div>
  );
}

export default Song;
