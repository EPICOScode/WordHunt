import { Form, Card} from "react-bootstrap";
import { useState } from "react";
import Features from "./features";

const Home = (stringtoSplit, separator) => {
// const arrayOfStrings = stringtoSplit.splice(separator); 

//   const words = [""];
  

  return (
    <Card
      style={{ width: "25rem" }}
      className="position-absolute top-50 start-50 translate-middle"
    >
      <Card.Body>
        <Card.Title className="text-center">HUNTAH</Card.Title>
        <Card.Text>
          <dt>Enter a list of words </dt>
        </Card.Text>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingInputCustom"
            type="text" 
          />
          <label htmlFor="floatingInputCustom">Words</label>
        </Form.Floating>
        <Features />
      </Card.Body>
    </Card>
  );
};

export default Home;
