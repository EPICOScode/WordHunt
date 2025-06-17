import { Form} from "react-bootstrap";


const InputFile = (value, onChange) => {

    
  return (
    <Form.Floating className="mb-3">
      <label htmlFor="floatingInputCustom">Words</label>
      <Form.Control id="floatingInputCustom" type="text"  value= {value} onChange ={onChange}/>
    </Form.Floating>
  );
};

export default InputFile