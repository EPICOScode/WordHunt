import { useState, useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";

const Features = () => {
  let vowels = "";
  let [find, setFind] = useState("");

  return (
    <>
      <ListGroup>
        <ListGroup.Item> Vowels used : </ListGroup.Item>
        <ListGroup.Item> Longest word :</ListGroup.Item>
        <ListGroup.Item> Words starting with vowel :</ListGroup.Item>
      </ListGroup>
      <Button
        variant="primary"
        className="mt-3 mx-auto d-block "
        size="lg"
        active
      >
        Submit
      </Button>
    </>
  );
};

export default Features;
