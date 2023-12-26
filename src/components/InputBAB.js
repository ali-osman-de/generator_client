import React,{useState} from "react";
import { FormGroup, Label, Input } from "reactstrap";

function InputBAB() {
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e) => {
    setIsValid(e.target.value);
  };

  return (
    <div>
      <FormGroup className="text-center">
        <Label for="exampleRole" className="fs-5 mt-3">
          What is your Before
        </Label>
        <Input
          style={{ height: "20vh" }}
          className="p-3"
          placeholder="Type your Before"
          id="exampleRole"
          name="text"
          type="textarea"
          invalid={!isValid}
          onChange={handleInputChange}
        />
        <Label for="exampleTask" className="fs-5 mt-3">
          What is your After
        </Label>
        <Input
          style={{ height: "20vh" }}
          className="p-3"
          placeholder="Type your After"
          id="exampleTask"
          name="text"
          type="textarea"
          invalid={!isValid}
          onChange={handleInputChange}
        />
        <Label for="exampleFormat" className="fs-5 mt-3">
          What is your Bridge
        </Label>
        <Input
          style={{ height: "20vh" }}
          className="p-3"
          placeholder="Type your Bridge"
          id="exampleFormat"
          name="text"
          type="textarea"
          invalid={!isValid}
          onChange={handleInputChange}
        />
      </FormGroup>
    </div>
  );
}

export default InputBAB;
