"use client";

import { supabase } from "@/utils/supabaseClient";

import { SlCloudUpload } from "react-icons/sl";
import { useState } from "react";
  
const UploadAdmin = ({ name, onUploadSuccess }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select a file to upload.");
      return;
    }

    setUploading(true);
    setError(null);
    setSuccessMessage(null);

    const { data, error } = await supabase.storage
      .from("pizzaimage")
      .upload(`public/${selectedFile.name}`, selectedFile);

    setUploading(false);
    if (error) {
      setError("Error uploading file: " + error.message);
    } else {
      setSuccessMessage("File uploaded successfully.");
      const publicURL = supabase.storage
        .from("pizzaimage")
        .getPublicUrl(`public/${selectedFile.name}`).data.publicUrl;
      setUploadedFiles([...uploadedFiles, publicURL]);
      onUploadSuccess(name, publicURL);
    }
  };

  return (
    <div className="flex flex-col flex-wrap items-center border border-dashed border-g1 p-[10px] w-[50%]">
      <input type="file" name={name} onChange={handleFileChange} />
      <SlCloudUpload className=" text-[150px]">upload</SlCloudUpload>
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="border border-dashed w-[100%] border-g1 p-[5px] mt-[10px] hover:bg-g3 hover:text-text"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {/* {uploadedFiles.map((file, index) => (
        <div key={index}>
        <Image
        className="flex flex-wrap justify-center text-center"
        src={file}
        width={200}
        height={200}
        alt={`Uploaded ${index}`}
        />
        </div>
        ))} */}
    </div>
  );
};

export default UploadAdmin;
