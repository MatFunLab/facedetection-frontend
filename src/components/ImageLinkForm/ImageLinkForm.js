import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({onInputChange, onSubmit}) => {
  return (
    <div className="detect-text">
      <div className="center">
        <p className="f3">{"Detect faces on uploaded pictures"}</p>
      </div>
      <div className="input-button center w-60 pa4 br3 shadow-5">
        <input className="w-80" type="text" onChange={onInputChange}/>
        <button className="w-20 grow link ph3 pv2 dib white bg-light-purple" onClick={onSubmit}>GO</button>
      </div>
    </div>
  );
}

export default ImageLinkForm;
