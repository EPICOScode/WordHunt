  import {Form} from "react-bootstrap";
  

  const InputFile = ({value, onChange}) => {
     
      
    return (
      <Form.Floating className="mb-3">
        <Form.Control  id="floatingInputCustom" type="text"  value = {value} onChange ={onChange} placeholder="" />
        <label htmlFor="floatingInputCustom" > Words </label>
      </Form.Floating>
    );
  };

  export default InputFile;