import { Form, Card, Button} from "react-bootstrap";

const Home = () => {


  return (
    <Card style={{ width: "25rem" }}  className="position-absolute top-50 start-50 translate-middle" >
      <Card.Body >
        <Card.Title>Huntah</Card.Title>
        <Card.Text>
          Enter a list of words and the app will show you some features
        </Card.Text>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingInputCustom"
            type="text"
            placeholder="list of words"
          />
          <label htmlFor="floatingInputCustom">Words</label>
        </Form.Floating>
        <Button variant="primary" size="lg" active> Submit </Button>
      </Card.Body>
    </Card>
  );
};

export default Home;
