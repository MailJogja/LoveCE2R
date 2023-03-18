import React from "react";
import logo from "../img/f1.png";
function Welcome() {
  return (
    <div>
      <div className="w-full min-h-screen">
        <img src={logo} alt="bg" className="w-full bg-cover bg-center h-full" />
        <div className="">
          <h1>Hai</h1>
          <h3>because you've been in my mind all the time</h3>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
