 import { ListGroupItem } from "react-bootstrap";


const VowelBeginner = ({words}) => {

let beginner = words.filter();

  return (
    <>
      <ListGroupItem> Words starting with vowel : {beginner} </ListGroupItem>
    </>
  );
};

export default VowelBeginner;
