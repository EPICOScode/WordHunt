import { useState, useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";

const Features = () => {
  let vowels = "";
  let longest = ""; 
  let firstVowel = ""; 


  let [find, setFind] = useState("");


  /*   ****************vowels***************** 
  on the list of words  the user enters words to the app, 
  what can I use => something to extract the vowels like map or filter maybe ? 

  *************Longest word***************
  So, for the longest word I can do the reduce property as I did in the exos but it can be cleaner maybe using a method 


  ************Words that begin with vowels*********** 
  

  ************ separate the words that use a coma**************
  I can use splice 



  */

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
