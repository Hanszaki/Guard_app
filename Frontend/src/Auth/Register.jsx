import React,{useState} from 'react'
import "bulma/css/bulma.min.css";
import { Form, Button, Container, Row, Col, Alert, Image } from 'react-bootstrap';
import axios from 'axios';
import {useHistory} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfirmPassword] = useState('');
    const history = useHistory();
    const [msg, setMsg] = useState('');

    const Register = async(e) =>{
        e.preventDefault();
    try {
        await axios.post('http://localhost:5000/users',{
          name: name,
          email: email,
          password: password,
          confPassword: confPassword
      });
      history.push("/");
      } catch (error) {
        if(error.response){
          setMsg(error.response.data.msg);
          alert(msg);
        } 
      }
    }

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <Form onSubmit={Register} className="box">
                <div className="text-center mt-1">
                  <Image
                    src="https://3.bp.blogspot.com/-Rh9L0YnoJuQ/WqtjzzFDtMI/AAAAAAAAJ4k/r5468TAe3zgeajHOds2i9N1cW_cpDbxNgCLcBGAs/s1600/Satpam.png"
                    alt="Satpam Image"
                    fluid
                    className="mb-2"
                  />
                </div>

                <div className="field columns is-centered">
                  <label className="label mt-1 columns is-centered is-size-2">
                    Guard Management System
                  </label>
                </div>

                {msg && (
                  <Alert variant="danger" className="text-center mb-3">
                    {msg}
                  </Alert>
                )}

                <Form.Group controlId="formBasicName" className="mb-4">
                  <Form.Label className="is-size-4">Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="is-rounded"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail" className="mb-4">
                  <Form.Label className="is-size-4">Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="****@gmail.com"
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

                <Form.Group controlId="formBasicConfirmPassword" className="mb-4">
                  <Form.Label className="is-size-4">Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="********"
                    value={confPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="is-rounded"
                  />
                </Form.Group>

                <div className="mb-4">
                  <Button type="submit" variant="info" block className="is-rounded-top">
                    Register
                  </Button>
                </div>

                <div className="text-center mb-1 columns is-centered">
                  <label className="label">Sudah memiliki akun? </label>
                  <a href="/" className="ml-1">
                    <label>Sign in</label>
                  </a>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Register
