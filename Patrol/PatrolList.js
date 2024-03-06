import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PatrolList = () => {
  const [FormPatrol, setFormPatrol] = useState([]);

  useEffect(() => {
    getFormPatrols();
  }, []);

  const getFormPatrols = async () => {
    const response = await axios.get("http://localhost:5000/formpatrol");
    setFormPatrol(response.data);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      getFormPatrols();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
    <h1>List Form Patrol</h1>
    <Link
                  to={`/addpatrol`}
                  className="button is-info"
                >
                  Add Patrol
                </Link>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tanggal</th>
            <th>Lokasi</th>
            <th>Uraian Temuan</th>
            <th>Gambar 1</th>
            <th>Gambar 2</th>
            <th>Tindak Lanjut</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {FormPatrol.map((FormPatrol) => (
            <tr key={FormPatrol.id}>
              <td>{FormPatrol.id}</td>
              <td>{FormPatrol.tanggal}</td>
              <td>{FormPatrol.lokasi}</td>
              <td>{FormPatrol.uraianTemuan}</td>
              <td>
                {FormPatrol.Url_Bukti1 && (
                  <img
                    src={FormPatrol.Url_Bukti1}
                    alt="Bukti 1"
                    style={{ maxWidth: "100px" }}
                  />
                )}
              </td>
              <td>
                {FormPatrol.Url_Bukti2 && (
                  <img
                    src={FormPatrol.Url_Bukti2}
                    alt="Bukti 2"
                    style={{ maxWidth: "100px" }}
                  />
                )}
              </td>
              <td>{FormPatrol.tindakLanjut}</td>
              <td>{FormPatrol.status}</td>
              <td>
                <Link
                  to={`edit/${FormPatrol.id}`}
                  className="button is-primary"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteFormPatrol(FormPatrol.id)}
                  className="button is-danger ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatrolList;
