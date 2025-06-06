import { useState, useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";
import Vowel from "./vowels"; 
import Longest from "./longest"; 
import VowelBeginner from "./vowelBeginner"; 

const Features = () => {
  

  // let [find, setFind] = useState("");
  
  const words = "";

  /*   ****************vowels***************** 
  on the list of words  the user enters words to the app, 
  what can I use => something to extract the vowels like map or filter maybe ? 

  *************Longest word***************
  So, for the longest word I can do the reduce property as I did in the exos but it can be cleaner maybe using a method 


  ************Words that begin with vowels*********** 
  

  ************ separate the words that use a coma**************
  I can use split 



  */

  return (
    <>
      <ListGroup>
        <ListGroup.Item> Vowels used :  {Vowel} </ListGroup.Item>
        <ListGroup.Item> Longest word : {Longest}</ListGroup.Item>
        <ListGroup.Item> Words starting with vowel : {VowelBeginner}</ListGroup.Item>
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
