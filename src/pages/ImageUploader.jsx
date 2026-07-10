import React, { useState } from "react";
import { Upload, Trash2, Image as ImageIcon } from "lucide-react";
import "../css/image-uploader.css";

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setImage(null);
    setPreview("");
  };

  return (
    <div className="image-uploader-container">
      <h2>Upload Product Image</h2>

      {!preview ? (
        <label className="upload-box">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />

          <Upload size={45} />
          <p>Click to Upload Image</p>
          <span>PNG, JPG, JPEG, WEBP</span>
        </label>
      ) : (
        <div className="preview-card">
          <img src={preview} alt="Preview" className="preview-image" />

          <div className="image-details">
            <div className="image-info">
              <ImageIcon size={20} />
              <div>
                <h4>{image.name}</h4>
                <p>{(image.size / 1024).toFixed(2)} KB</p>
              </div>
            </div>

            <div className="buttons">
              <label className="change-btn">
                Change
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  hidden
                />
              </label>

              <button className="delete-btn" onClick={removeImage}>
                <Trash2 size={18} />
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;