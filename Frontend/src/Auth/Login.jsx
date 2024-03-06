import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col, Alert, Image } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [msg, setMsg] = useState("");

  

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      history.push("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
        alert(msg);
      }
    }
  };

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <Container>
          <Row className="justify-content-center">
            <Col md={5}>
              <Form onSubmit={Auth} className="box is-info">
                <div className="text-center mb-3">
                  <Image
                    src="https://3.bp.blogspot.com/-Rh9L0YnoJuQ/WqtjzzFDtMI/AAAAAAAAJ4k/r5468TAe3zgeajHOds2i9N1cW_cpDbxNgCLcBGAs/s1600/Satpam.png"
                    alt="Satpam Image"
                    fluid
                    className="mb-2"
                  />
                  <h3 className="is-size-4">Guard Management System</h3>
                </div>

                {msg && (
                  <Alert variant="danger" className="text-center mb-3">
                    {msg}
                  </Alert>
                )}

                <Form.Group controlId="formBasicEmail" className="mb-4">
                  <Form.Label className="is-size-4">Email or User</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="is-rounded"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-4">
                  <Form.Label className="is-size-4">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="is-rounded"
                  />
                </Form.Group>

                <div className="mb-4">
                  <Button type="submit" variant="info" block>
                    Login
                  </Button>
                </div>

                <div className="text-center mb-lg-5">
                  <label className="is-size-6">Belum memiliki akun? </label>
                  <a href="/register" className="ml-1">
                    <label className="is-size-6">Sign Up</label>
                  </a>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Login;
