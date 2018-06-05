import React from "react";
import "./FaceDetection.css";

const FaceDetection = ({imageUrl, box}) => {
  return (
    <div className="center pa3 detect-face">
      <div className="relative mt2">
        <img id="inputImage" src={imageUrl} alt="metro" width="500px" height="auto"/>
        <div className="bounding-box" style={{top: box.topRow,
          right: box.rightCol,
          bottom: box.bottomRow,
          left: box.leftCol}}>
        </div>
      </div>
    </div>
  );
}

export default FaceDetection;
