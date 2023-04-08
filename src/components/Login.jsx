import React,{useState} from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import banner from "../assets/banner.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigates = useNavigate();

  const [errors, setErrors] = useState({});
   const[localdata,setLocaldata]=useState([])
  const [data, setData] = useState({
    email: "",
    password: "",
   
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {

    const getUser=localStorage.getItem("formValues")
    console.log(getUser)
    e.preventDefault();
    const {  email, password } = data;
    let errors = {};
  
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.trim().length < 6) {
      errors.password = "Password should be at least 6 characters";
    }

    if (Object.keys(errors).length === 0) {
      if(getUser && getUser.length>0){
        const userData=JSON.parse(getUser)
        const userLogin=userData.filter((item)=>{
          return item.email===email && item.password===password
        })

        console.log(userLogin)
        if(userLogin.length===0){
          alert("Invalid User Details")
        }else{
          alert("User Login Successfully")
          localStorage.setItem("user_login",JSON.stringify(getUser))
          navigates("/home")
        }
      }
    } else {
      setErrors(errors);
    }
  };
  return (
    <Container fluid-container>
      <h1 className="text-center my-4 text-white">Login</h1>
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

            <Button variant="primary" type="submit" className="my-4">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
