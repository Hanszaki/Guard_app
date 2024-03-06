import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddDarurat = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    // Inisialisasi data form jika diperlukan
    lokasi: "",
    nomor: "",
    type: "",
  });
  
  const showNotification = (message) => {
    toast.success(message);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericValue = name === "nomor" ? value.replace(/^0+/, "") : value;
    const updatedValue = name === "nomor" ? `+62${numericValue}` : numericValue;
    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Kirim data ke server
      const response = await fetch("http://localhost:5000/darurat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form Data Successfully Submitted");
        // Reset form jika diperlukan
        setFormData({
          lokasi: "",
          nomor: "",
          type: "",
        });

        
        showNotification("Data berhasil dimasukkan.");
        history.push("/darurat");
      } else {
        console.error("Failed to submit form data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="pb-6">
      <br></br>
      <br></br>
      <div className="container shadow w-50 mt-6 justify-content-start px-6 pb-6">
        <div className="justify-content-start d-inline shadow-sm">
          <h2 className="mb-4 pt-6">Tambah Data</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="lokasi" className="form-label">
                Lokasi:
              </label>
              <input
                type="text"
                id="lokasi"
                name="lokasi"
                className="form-control"
                required
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="type" className="form-label">
                Nama Kontak :
              </label>
              <input
                type="text"
                id="Nama Nomor"
                name="type"
                className="form-control"
                required
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nomor" className="form-label">
                Masukkan nomor :
              </label>
              <div className="input-group">
                <span className="input-group-text">+62</span>
                <input
                  type="text"
                  id="nomor"
                  name="nomor"
                  className="form-control"
                  required
                  maxLength="13"
                  pattern="[0-9]*"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary">
                Tambah Data
              </button>
            </div>
          </form>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default AddDarurat;
