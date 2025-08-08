import { Card, ListGroup, ListGroupItem } from "react-bootstrap"; // ce que j'utilise pour donner forme dans l'UI
import { useState } from "react"; // le component react utilisé pour que les elements soient mises a jour de maniére automatique, le status de la page change
import HandleClick from "./components/handleClick"; // le component/function qui gere ce que se passe quand l'user fait click
import Vowel from "./components/features/vowels"; // component pour gerer ce que doit se passer avce les voyels
import Longest from "./components/features/longest"; // pareil mais pour le mot plus long
import VowelBeginner from "./components/features/vowelBeginner";
import InputFile from "./components/inputFile";

const Home = () => {
  const [value, setValue] = useState("");
  const [words, setWords] = useState([]);

  const submitButton = () => {
    const splitWords = value
      .split(/[ ,.!?]+/)
      .filter((word) => word.trim() !== "");
    setWords(splitWords);
    console.log("The words are: ", splitWords);
  };

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
        <InputFile
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <HandleClick onClick={submitButton} />
        <hr />
        <ListGroup>
          <Vowel words={words} />
          <Longest words={words} />
          <VowelBeginner words={words} />
        </ListGroup>
      </Card.Body>
    </Card>
  );
};
export default Home;
