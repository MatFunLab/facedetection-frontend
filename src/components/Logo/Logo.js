// example of puting logo on page

import React from "react";
import "./Logo.css"

const Logo = () => {
  return (
    <div className="logo w-20">
      <svg>
        <path d="M150 0 L75 200 L225 200 Z" />
      </svg>
    </div>
  );
}

export default Logo;
