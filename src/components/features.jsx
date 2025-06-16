import { useRef } from "react";
import { Button, ListGroup } from "react-bootstrap";
import Vowel from "./vowels"; 
import Longest from "./longest"; 
import VowelBeginner from "./vowelBeginner"; 

const Features = () => {
  
  let useRef = ('')

  const handleClick = useRef(null)


  return (
    <>
      <ListGroup>
        <ListGroup.Item> Vowels used :  {Vowel} </ListGroup.Item>
        <ListGroup.Item> Longest word : {Longest}</ListGroup.Item>
        <ListGroup.Item> Words starting with vowel : {VowelBeginner}</ListGroup.Item>
      </ListGroup>
      <Button
        onClick={handleClick}
        variant="primary"
        className="mt-3 mx-auto d-block "
        size="lg"
        active   
        type="submit"     
      >
        Submit
      </Button>
    </>
  );
};

export default Features;
