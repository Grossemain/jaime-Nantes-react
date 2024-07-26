import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images importées depuis la balise IMG sont accessibles dans "public" */}
      <img src="./logo-jaimenantes-75px.png" alt="logo j'aime Nantes" />
    </div>
  );
};

export default Logo;
