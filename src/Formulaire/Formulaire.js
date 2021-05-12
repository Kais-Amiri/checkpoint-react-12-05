import React from "react";
import { Form, Button } from "react-bootstrap";

function Formulaire() {
  return (
    <div>
      <div className="container justify-content-center border border-primary rounded mt-5">
        <div className="row justify-content-center mt-3 mb-3">
          <div className="col-lg-4 col-md-8 order-lg-first order-md-last">
            <h1>Welcome to Gomycode</h1>
            <Form>
              <Form.Group
                controlId="formBasicName"
                className="d-flex flex-column align-items-start"
              >
                <Form.Label variant="dark">Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group
                controlId="formBasicLastName"
                className="d-flex flex-column align-items-start"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="LastName" />
              </Form.Group>
              <Form.Group
                controlId="formBasicEmail"
                className="d-flex flex-column align-items-start"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group
                controlId="formBasicPassword"
                className="d-flex flex-column align-items-start"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </div>
          <div className="col-lg-5 col-md-8 mt-5">
            <img
              src="https://image.freepik.com/vecteurs-libre/inscrivez-vous-acces-login-mot-passe-internet-site-web-ligne-concept-illustration-plate_385073-108.jpg"
              alt="Inscription"
              className="img-fluid rounded"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulaire;
