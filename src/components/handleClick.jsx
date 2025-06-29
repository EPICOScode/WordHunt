import { Button } from "react-bootstrap";


  const HandleCLick = ({onClick}) => {



  return (
    <>
   
      <Button
        onClick={onClick}
        variant="primary"
        className="mt-3 mx-auto d-block "
        size="lg"
        active   
        type="submit"     
      >
        Submit
      </Button>
    </>
  );
};

export default HandleCLick;   
