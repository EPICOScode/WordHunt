 import { ListGroupItem } from "react-bootstrap";

const Vowel = ({words}) => {

    
    let vowels = "";

    words.forEach( word => {
        for (let letter of word.toLowerCase()) {
            if (/[aeiou]/.test(letter))
            vowels += letter
}})


    return (
        <>
        <ListGroupItem> Vowels used :  {vowels} </ListGroupItem>  
        </>
    )
}; 

export default Vowel;