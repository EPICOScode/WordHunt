import { ListGroupItem } from "react-bootstrap";

const Longest = ({ words }) => {
  

let longestWord = words.reduce((long,current) => {
  return current.length > long.length ? current : long
}, "")  


     return (
    <>
      <ListGroupItem> Longest word : {longestWord} </ListGroupItem>
    </>
  );
};

export default Longest;
