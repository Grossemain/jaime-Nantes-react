import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images importées depuis la balise IMG sont accessibles dans "public" */}
      <img src="./logo-jaimenantes-site.png" alt="logo j'aime Nantes" />
      <span>J'aime Nantes</span>
    </div>
  );
};

export default Logo;
