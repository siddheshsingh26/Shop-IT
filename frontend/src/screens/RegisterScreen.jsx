import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/shared/Message";
import Loader from "../Components/shared/Loader";
import { register } from "../actions/userAction";
import FromContainer from "../Components/shared/FromContainer";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const location = useLocation();
  const history = useNavigate();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispacth = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      if (userInfo._id) {
        console.log(userInfo);
        history(redirect);
      }
    }
  }, [history, redirect, userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispacth(register(name, email, password));
  };

  return (
    <>
      <FromContainer>
        <h1>Register</h1>
        {error && <Message varient="danger">{error}</Message>}
        {loading && <Loader />}
        {message && <Message variant="danger">{setMessage}</Message>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password Address</Form.Label>
            <Form.Control
              type="password"
              placeholder="enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="confirmpassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-enter password"
              value={comfirmPassword}
              onChange={(e) => setComfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" varient="primary">
            SIGN IN
          </Button>
          <Row>
            <Col>
              Have an account !
              <Link
                to={redirect ? `register?redirect=${redirect}` : "/register"}
              >
                Register
              </Link>
            </Col>
          </Row>
        </Form>
      </FromContainer>
    </>
  );
};

export default RegisterScreen;
