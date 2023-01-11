import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/shared/Message";
import Loader from "../Components/shared/Loader";
import { login } from "../actions/userAction";
import FromContainer from "../Components/shared/FromContainer";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const history = useNavigate();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispacth = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

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
    dispacth(login(email, password));
  };

  return (
    <>
      <FromContainer>
        <h1>SIGN IN</h1>
        {error && <Message varient="danger">{error}</Message>}
        {loading && <Loader />}

        <Form onSubmit={submitHandler}>
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
          <Button type="submit" varient="primary">
            SIGN IN
          </Button>
          <Row>
            <Col>
              New Customer ?
              <Link to={redirect ? `/register` : "/register"}>Register</Link>
            </Col>
          </Row>
        </Form>
      </FromContainer>
    </>
  );
};

export default LoginScreen;
