import React, { useState } from 'react';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    
    // Prévisualisation de l'image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/articles', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Image uploaded successfully');
        // Traitez la réponse comme nécessaire
      } else {
        console.error('Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {preview && <img src={preview} alt="Preview" style={{ width: '200px', height: '200px' }} />}
        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
};

export default ImageUpload;
