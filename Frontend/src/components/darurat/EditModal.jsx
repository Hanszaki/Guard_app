import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";


const EditModal = ({ show, onHide, handleEdit, daruratData }) => {
  const [editedData, setEditedData] = useState(daruratData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Handle save changes logic
    handleEdit(editedData);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Formulir edit di sini */}
        <div className="mb-3">
          <label className="form-label">Type</label>
          <input
            type="text"
            className="form-control"
            name="type"
            value={editedData.type}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nomor</label>
          <input
            type="text"
            className="form-control"
            name="nomor"
            value={editedData.nomor}
            onChange={handleInputChange}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
