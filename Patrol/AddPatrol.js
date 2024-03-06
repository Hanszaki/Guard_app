import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AddPatrol = () => {
  const [title, setTitle] = useState("");
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [preview1, setPreview1] = useState("");
  const [preview2, setPreview2] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const [actionTaken, setActionTaken] = useState("");
  const [status, setStatus] = useState("");
  const [tanggal, setTanggal] = useState(""); // Tambahkan state untuk tanggal
  const history = useHistory();

  const loadImage = (e, setFile1, setFile2, setPreview1, setPreview2) => {
    const image = e.target.files[0];
  
    if (image) {
      // Set file 1
      setFile1(image);
      // Set preview 1
      setPreview1(URL.createObjectURL(image));
  
      // Jika ada file kedua, atur file 2 dan preview 2
      if (e.target.files.length > 1) {
        const image2 = e.target.files[1];
        setFile2(image2);
        setPreview2(URL.createObjectURL(image2));
      }
    }
  };
  

  const savePatrol = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file1", file1);
    formData.append("file2", file2);
    formData.append("title", title);
    formData.append("location", location);
    formData.append("description", description);
    formData.append("url1", url1);
    formData.append("url2", url2);
    formData.append("actionTaken", actionTaken);
    formData.append("status", status);
    const formattedDate = new Date(tanggal).toISOString().split('T')[0];
  formData.append("tanggal", formattedDate); // Tambahkan tanggal ke dalam FormData

    try {
      await axios.post("http://localhost:5000/formpatrol", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      history.push("/PatrolList");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={savePatrol}>
          <div className="field">
            <label className="label">Lokasi</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Lokasi"
              />
            </div>
          </div>

          {/* ... Other input fields ... */}

          <div className="field">
            <label className="label">Tanggal</label>
            <div className="control">
              <input
                type="date" // Ganti type menjadi "date"
                className="input"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">deskripsi</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="deskripsi"
              />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Image 1</label>
                <div className="control">
                  <div className="file">
                    <label className="file-label">
                      <input
                        type="file"
                        className="file-input"
                        onChange={(e) => loadImage(e, setFile1, setFile2, setPreview1, setPreview2)}
                      />
                      <span className="file-cta">
                        <span className="file-label">Choose a file...</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {preview1 ? (
                <figure className="image is-128x128">
                  <img src={preview1} alt="Preview Image 1" />
                </figure>
              ) : (
                ""
              )}
            </div>

            <div className="column">
              <div className="field">
                <label className="label">Image 2</label>
                <div className="control">
                  <div className="file">
                    <label className="file-label">
                      <input
                        type="file"
                        className="file-input"
                        onChange={(e) => loadImage(e, setFile1, setFile2, setPreview1, setPreview2)}
                      />
                      <span className="file-cta">
                        <span className="file-label">Choose a file...</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {preview2 ? (
                <figure className="image is-128x128">
                  <img src={preview2} alt="Preview Image 2" />
                </figure>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="field mt-4">
            <label className="label">tindak Lanjut</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={actionTaken}
                onChange={(e) => setActionTaken(e.target.value)}
                placeholder="tindak lanjut"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Status</label>
            <div className="control">
              <div className="select">
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="selesai">Selesai</option>
                  <option value="proses">Proses</option>
                  <option value="belum diproses">Belum Diproses</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPatrol;
