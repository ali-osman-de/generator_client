import React, {useState} from "react";
import { FormGroup, Label, Input } from "reactstrap";

function InputCARE() {
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e) => {
    setIsValid(e.target.value);
  };

  return (
    <div>
      <FormGroup className="text-center">
        <Label for="exampleRole" className="fs-5 mt-3">
          What is your Context
        </Label>
        <Input
          style={{ height: "20vh" }}
          className="p-3"
          placeholder="Type your Context"
          id="exampleRole"
          name="text"
          type="textarea"
          invalid={!isValid}
          onChange={handleInputChange}
        />
        <Label for="exampleTask" className="fs-5 mt-3">
          What is your Action
        </Label>
        <Input
          style={{ height: "20vh" }}
          className="p-3"
          placeholder="Type your Action"
          id="exampleTask"
          name="text"
          type="textarea"
          invalid={!isValid}
          onChange={handleInputChange}
        />
        <Label for="exampleFormat" className="fs-5 mt-3">
          What is your Result
        </Label>
        <Input
          style={{ height: "20vh" }}
          className="p-3"
          placeholder="Type your Result"
          id="exampleFormat"
          name="text"
          type="textarea"
          invalid={!isValid}
          onChange={handleInputChange}
        />
        <Label for="exampleFormat" className="fs-5 mt-3">
          What is your Example
        </Label>
        <Input
          style={{ height: "20vh" }}
          className="p-3"
          placeholder="Type your Example"
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

export default InputCARE;
