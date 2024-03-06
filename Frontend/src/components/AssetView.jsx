import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/style.css";
import ReactPaginate from "react-paginate";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  Pagination,
} from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";

const AssetView = () => {
  const [asset, setAsset] = useState([]);
  const [page, setPage] = useState(0);
  const [limit] = useState(10); // Fixed limit, no need for state
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");


  const getAsset = async () => {
    try {
      const encodedKeyword = encodeURIComponent(keyword);
      let url = `http://localhost:5000/asset?search_query=${encodedKeyword}&page=${page}&limit=${limit}&startDate=${startDate}&endDate=${endDate}`;
      const response = await axios.get(url);
      setAsset(response.data.result);
      setPage(response.data.page);
      setPages(response.data.totalPage);
      setRows(response.data.totalRows);
    } catch (error) {
      console.error("Error fetching asset:", error.message);
      if (error.response && error.response.status === 404) {
        setAsset([]);
        setPage(0);
        setPages(0);
        setRows(0);
      }
    }
  };

  const changePage = ({ selected }) => {
    setPage(selected);
    if (selected === 9) {
      setMsg(
        "Jika tidak menemukan data yang Anda cari, silahkan cari data dengan kata kunci spesifik!"
      );
    } else {
      setMsg("");
    }
  };

  const handleDeleteAsset = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (isConfirmed) {
      try {
        await axios.delete(`http://localhost:5000/asset/${id}`);
        setQuery(""); // Reset search query
        getAsset();
        toast.success("Data deleted successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } catch (error) {
        console.error("Error deleting asset:", error.message);
      }
    }
  };
  const searchData = (e) => {
    e.preventDefault();
    setPage(0);
    setMsg("");
    setKeyword(query);
    getAsset();
  };

  const clearSearchOnEsc = (e) => {
    if (e.key === "Escape") {
      setKeyword("");
      setQuery("");
    }
  };

  useEffect(() => {
    getAsset();
    document.addEventListener("keydown", clearSearchOnEsc);
    return () => {
      document.removeEventListener("keydown", clearSearchOnEsc);
    };
  }, [page, startDate, endDate, keyword]);
  return (

    <Container>
      <Row className="justify-content-center">
        <Col>
          <Form className="mt " onSubmit={searchData}>
            <Form.Label className="mt-5 mb-3 is-size-2 has-text-white display-4 header">
              List Asset
            </Form.Label>
            <Form.Group className="m-3">
              <Form.Control
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Find something here..."
              />
            </Form.Group>
            <Form.Group className="mx-3">
              <Row>
                <Col>
                  <Form.Control
                    className=" my-2"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    className=" my-2"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </Col>
              </Row>
            </Form.Group>
            <div className="m-3">
              <Button className="sb-button" type="submit">
                Search
              </Button>
            </div>
          </Form>

          <div style={{ overflowX: "auto" }}>
            <Table striped bordered hover responsive className="mt-2 text-sm">
            <thead>
            <tr>
                <th>Tanggal</th>
                <th>Waktu</th>
                <th>Lokasi</th>
                <th>catatan</th>
                <th>Image</th>
                <th>Action</th>
            </tr>
            </thead>

            <tbody>
              {asset.map((asset) => (
                <tr key={asset.id}>
                  <td>
                    {asset.formattedTimestamp &&
                      asset.formattedTimestamp.split(" ").join("-")}
                  </td>
                  <td>
                    {asset.timestamp &&
                      asset.timestamp.split(" ")[1]}{" "}
                    {/* Menampilkan bagian jam */}
                  </td>
                  <td>
                    <p className="title is-7">{asset.lokasi}</p>
                  </td>
                  <td>{asset.catatan}</td>
                  <td>
                    <a
                      href={asset.url1}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="border-0">
                        <img
                          src={asset.url1}
                          alt="Image"
                          style={{ maxWidth: "100px", maxHeight: "100px" }}
                        />
                      </button>
                    </a>
                    <a
                      href={asset.url2}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="border-0">
                        <img
                          src={asset.url2}
                          alt="Image"
                          style={{ maxWidth: "100px", maxHeight: "100px" }}
                        />
                      </button>
                    </a>
                  </td>

                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteAsset(asset.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="pagination-container">
            <p>
              Total Rows: {rows} Page: {rows ? page + 1 : 0} of {pages}
            </p>
            <p className="text-center text-danger">{msg}</p>
            <Pagination className="justify-content-center">
              <Pagination.Prev
                onClick={() => changePage({ selected: page - 1 })}
                disabled={page === 0}
              />
              <Pagination.Next
                onClick={() => changePage({ selected: page + 1 })}
                disabled={page === pages - 1}
              />
            </Pagination>
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default AssetView;
