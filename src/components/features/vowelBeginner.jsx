import { ListGroupItem } from "react-bootstrap";

const VowelBeginner = ({ words }) => {
  
  let beginner = words.filter(word => {
    return ["a","e","i","o","u"].includes(word[0])})
  return (
    <>
      <ListGroupItem> Words starting with vowel : {beginner.join(", ")} </ListGroupItem>
    </>
  );
};

export default VowelBeginner;
