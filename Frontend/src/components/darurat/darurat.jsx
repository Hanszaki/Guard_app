import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditModal from "./EditModal";

const Darurat = () => {
  const history = useHistory();
  const [darurat, setDarurat] = useState([]);
  const [userLocation, setUserLocation] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedDarurat, setSelectedDarurat] = useState(null);

  const getDarurat = async (searchTerm) => {
    try {
      let url = `http://localhost:5000/darurat?search=${searchTerm}`;
  
      const response = await axios.get(url);
      setDarurat(response.data);
      console.log(response.data);
  
      // Show notification if no data is found
      if (response.data.length === 0) {
        showNotification("No data found for the entered location.");
      } else {
        // Hide the notification if data is found
        hideNotification();
      }
    } catch (error) {
      console.error("Error fetching darurat:", error.message);
      showErrorNotification("Error fetching darurat. Data tidak ditemukan.");
    }
  };
  
  const showNotification = (message) => {
    toast.info(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  
  const hideNotification = () => {
    toast.dismiss(); // Menutup notifikasi jika ada yang terbuka
  };
  
  const showErrorNotification = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleLocationChange = (e) => {
    setUserLocation(e.target.value);
  };

  const handleSearch = async () => {
    try {
      await getDarurat(userLocation);
    } catch (error) {
      console.error("Error fetching darurat:", error.message);
    }
  };

  const navigateToAddDarurat = () => {
    // Redirect to /addDarurat when the button is clicked
    history.push("/addDarurat");
  };
  // Add darurat as a dependency for useEffect

  const filteredDarurat = darurat.filter(
    (item) =>
      item.lokasi &&
      item.lokasi.toLowerCase() === userLocation.toLowerCase()
  );

  const handleEditClick = (id) => {
    const selectedData = darurat.find((item) => item.id === id);
    setSelectedDarurat(selectedData);
    setShowEditModal(true);
  };

  const handleEdit = async (editedData) => {
    try {
      // Kirim permintaan ke backend untuk menyimpan perubahan
      const response = await axios.put(
        `http://localhost:5000/darurat/${editedData.id}`,
        editedData
      );
  
      // Perbarui state darurat setelah berhasil edit
      setDarurat((prevDarurat) =>
        prevDarurat.map((item) =>
          item.id === editedData.id ? response.data : item
        )
      );
  
      // Menampilkan notifikasi sukses
      toast.success("Data edited successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
  
      // Sembunyikan modal setelah edit
      setShowEditModal(false);
  
      // Perbarui data setelah penyuntingan
      await getDarurat(userLocation);
  
      console.log("Data edited successfully:", response.data);
    } catch (error) {
      console.error("Error editing data:", error.message);
  
      // Menampilkan notifikasi kesalahan
      toast.error("Error editing data", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  const handleDelete = async (id) => {
    // Display a confirmation dialog
    const isConfirmed = window.confirm('Are you sure you want to delete this item?');

    // If the user confirms, proceed with the deletion
    if (isConfirmed) {
      try {
        await axios.delete(`http://localhost:5000/darurat/${id}`);
        setDarurat((prevDarurat) => prevDarurat.filter((item) => item.id !== id));
        toast.success("Data deleted successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } catch (error) {
        console.error("Error deleting data:", error.message);
        toast.error("Error deleting data", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
  };

  const filterNomor = (nomor) => {
    return nomor.replace(/(.{3})/, '$1-');
  };


  return (
    <div className="container mt-5 p-lg-5">
      <h1 className="mb-5">KONTAK DARURAT</h1>
      <div className="row">
        <div className="col-md-6 ">
          <div className="mb-3 align-items-center ">
            <label className="form-label">Input Lokasi:</label>
            <input
              className="form-control"
              type="text"
              value={userLocation}
              onChange={handleLocationChange}
            />
          </div>
          <button className="btn btn-primary mr-4" onClick={handleSearch}>
            Cari
          </button>
          <button className="btn btn-primary" onClick={navigateToAddDarurat}>
            Tambah
          </button>
        </div>
      </div>
      <div className="mt-3">
        <div className="mt-3">
          <table className="table d-sm-table table-bordered table-striped-columns">
            <thead className="table-secondary">
              <tr>
                <th scope="col">Nama kontak</th>
                <th scope="col">Nomor</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDarurat.map((darurat) => (
                <tr key={darurat.id}>
                  <td>{darurat.type}</td>
                  <td>{filterNomor(darurat.nomor)}</td>
                  <td>
                    {/* Tombol Edit */}
                    <Button
                      variant="primary"
                      onClick={() => handleEditClick(darurat.id)}
                    >
                      Edit
                    </Button>{" "}
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(darurat.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {selectedDarurat && (
            <EditModal
              show={showEditModal}
              onHide={() => setShowEditModal(false)}
              handleEdit={handleEdit}
              daruratData={selectedDarurat}
            />
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Darurat;
