import GenerateCategories from "./components/GenerateCategories";
import Navigator from "./components/Navigator";
import GeneratePush from "./components/GeneratePush";
import { Col, Row } from "reactstrap";
import Result from "./components/Result";

function App() {
  return (
    <div>
      <Navigator />
      <Row>
        <Col xs="4" className="mx-5 mt-5">
          <GenerateCategories />
        </Col>
        <Col xs="4" className="mx-5 mt-5">
          <GeneratePush />
        </Col>
        <Col xs="4" className="mx-5 mt-5">
         <Result/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
