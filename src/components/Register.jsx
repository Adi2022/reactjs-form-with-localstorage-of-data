import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import banner from "../assets/banner.png";
import useApplicationForm from "./useApplicationForm";
const Register = () => {

  const {data,handleInput,handleSubmit,errors}=useApplicationForm();
  return (
    <>
      <Container fluid-container>
        <h1 className="text-center fs-1 mt-4 text-white">Sign Up</h1>
        <Row className="justify-content-center align-items-center my-4">
          <Col md={6} sm={4}>
            <Image
              src={banner}
              roundedCircle
              fluid
              className="my-4"
              style={{ width: "100%" }}
            />
          </Col>
          <Col md={6} sm={4}>
            <Form className="my-4" onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>FullName</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter FullName"
                  className="mb-2"
                  value={data.fullname}
                  name="fullname"
                  onChange={handleInput}
                />
                {errors.fullname && (
                  <small className="text-danger">{errors.fullname}</small>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Email"
                  className="mb-2"
                  value={data.email}
                  name="email"
                  onChange={handleInput}
                />
                {errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Password"
                  className="mb-2"
                  value={data.password}
                  name="password"
                  onChange={handleInput}
                />
                {errors.password && (
                  <small className="text-danger">{errors.password}</small>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Confirm Password"
                  className="mb-2"
                  value={data.confirm_password}
                  name="confirm_password"
                  onChange={handleInput}
                />
                {errors.confirm_password && (
                  <small className="text-danger">
                    {errors.confirm_password}
                  </small>
                )}
              </Form.Group>

              <Button variant="primary" type="submit" className="my-4">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
