import React from "react";

const Banniere = () => {
  return (
    <div className="banniere">
      {/* Les images importées depuis la balise IMG sont accessibles dans "public" */}
      <img src="./banniere site jaimenantes.png" alt="banniere site j'aime Nantes" />
    </div>
  );
};

export default Banniere;
