import React, { useState } from "react";
import axios from "axios";


const ImageUpload = () => {
  //Logique upload image
  const [image, SetImage] = useState("");
  function handleImage(e) {
    console.log(e.target.files);
    SetImage(e.target.files[0]);
  }
  function handleApi() {
    const formData = new FormData();
    formData.append("image", image);
    axios.post("http://127.0.0.1:8000/api/articles", formData).then((res) => {
      console.log(res);
    });
  }

  return (
    <div>
        <div className="group">
          <label htmlFor="image">Image</label>
          <input type="file" name="image" onChange={handleImage} />
          <button onClick={handleApi}>telecharger</button>
        </div>
    </div>
  );
};

export default ImageUpload;
