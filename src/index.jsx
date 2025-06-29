import { Card, ListGroup} from "react-bootstrap";
import { useState } from "react";
import HandleClick from "./components/handleClick";
import Vowel from "./components/features/vowels"; 
import Longest from "./components/features/longest"; 
import VowelBeginner from "./components/features/vowelBeginner"; 
import InputFile from "./components/inputFile";


const Home = () => {
  const [value, setValue] = useState(""); 
  const [words, setWords] = useState([]);

  const submitButton = () => {
    const splitWords = value.split(/[ ,.!?]+/).filter(word=>word.trim()!=="");
    setWords(splitWords)
    console.log('The words are: ', splitWords )
  }
  
  return (
    <Card
      style={{ width: "25rem" }}
      className="position-absolute top-50 start-50 translate-middle"
    >
      <Card.Body> 
        <Card.Title className="text-center"> HUNTAH </Card.Title>
        <Card.Text>
          <dt>Enter a list of words </dt>
        </Card.Text>
        <InputFile value={value} onChange = {(e) => {setValue(e.target.value)}} />
        <HandleClick onClick={submitButton}/> 
        <hr/>
           <ListGroup>
        <ListGroup.Item> Vowels used :  <Vowel words={words}/></ListGroup.Item>
        <ListGroup.Item> Longest word : <Longest words={words}/> </ListGroup.Item>
        <ListGroup.Item> Words starting with vowel : <VowelBeginner words={words}/></ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>
  );
};
export default Home;
