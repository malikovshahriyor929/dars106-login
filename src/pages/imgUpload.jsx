import axios from "axios";
import { useState } from "react";

const ImageUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
      if (event.target.files && event.target.files[0]) {
          setFile(event.target.files[0]);
        }
        console.log(event.target.files[0]);    
  };

  const handleUpload = async () => {

    let token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("image", file);
    

      axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth/edit-image`,
        {
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

  };

  return (
    <div>
      <input className="bg-[red]" type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file}>
        Upload
      </button>
    </div>
  );
};

export default ImageUpload;
