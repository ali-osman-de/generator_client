import React, { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";

function InputTASK() {
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e) => {
    setIsValid(e.target.value);
  };

  return (
    <div>
      <FormGroup className="text-center">
        <Label for="exampleRole" className="fs-5 mt-3">
          What is your Task
        </Label>
        <Input
          style={{ height: "20vh" }}
          className="p-3"
          placeholder="Type your Task"
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
          What is your Goal
        </Label>
        <Input
          style={{ height: "20vh" }}
          className="p-3"
          placeholder="Type your Goal"
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

export default InputTASK;
