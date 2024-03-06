import React, { useState } from 'react';
import axios from 'axios';

const LapdiForm = () => {
  const [formData, setFormData] = useState({
    tanggal: '',
    jam: '',
    anggota: '',
    urai: '',
    lokasi: '',
    penyebab: '',
    kerugian: '',
    tindakan: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const storagePath = getStoragePath();

      const lapdiData = new FormData();
      lapdiData.append('tanggal', formData.tanggal);
      lapdiData.append('jam', formData.jam);
      lapdiData.append('anggota', formData.anggota);
      lapdiData.append('urai', formData.urai);
      lapdiData.append('lokasi', formData.lokasi);
      lapdiData.append('penyebab', formData.penyebab);
      lapdiData.append('kerugian', formData.kerugian);
      lapdiData.append('tindakan', formData.tindakan);
      lapdiData.append('image', formData.image);

      const response = await axios.post('http://localhost:5000/lapdi', lapdiData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      // Handle the response as needed, e.g., show success message or navigate to another page
    } catch (error) {
      console.error('Submission error:', error);
      // Handle the error, e.g., show error message to the user
    }
  };

  const getStoragePath = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `public/images/lapdi/${day}-${month}-${year}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Tanggal:</label>
      <input type="date" name="tanggal" value={formData.tanggal} onChange={handleChange} required />

      <label>Jam:</label>
      <input type="text" name="jam" value={formData.jam} onChange={handleChange} required />

      <label>Anggota:</label>
      <input type="text" name="anggota" value={formData.anggota} onChange={handleChange} required />

      <label>Urai:</label>
      <input type="text" name="urai" value={formData.urai} onChange={handleChange} required />

      <label>Lokasi:</label>
      <input type="text" name="lokasi" value={formData.lokasi} onChange={handleChange} required />

      <label>Penyebab:</label>
      <input type="text" name="penyebab" value={formData.penyebab} onChange={handleChange} required />

      <label>Kerugian:</label>
      <input type="text" name="kerugian" value={formData.kerugian} onChange={handleChange} required />

      <label>Tindakan:</label>
      <input type="text" name="tindakan" value={formData.tindakan} onChange={handleChange} required />

      <label>Gambar:</label>
      <input type="file" name="image" accept="image" onChange={handleFileChange} required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default LapdiForm;
