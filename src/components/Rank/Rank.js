import React from "react";
import "./Rank.css"

const Rank = ({name, entries}) => {
  return (
      <div className="center f4 fw6">
        <div>
        {`${name} you tried to detect faces`}
        </div>
        <div className="fw6 pl3">
          {`${entries} times`}
        </div>
      </div>

  );
}

export default Rank;
