import React, { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import InputRFT from "./InputRFT";
import InputTAG from "./InputTAG";
import InputBAB from "./InputBAB";
import InputCARE from "./InputCARE";

function GenerateCategories() {
  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  return (
    <div>
      <FormGroup className="text-center">
        <Label for="exampleSelect" className="fs-5">
          Select Your AI FrameWork
        </Label>
        <Input
          id="exampleSelect"
          name="select"
          type="select"
          onChange={handleRoleChange}
        >
          <option value="">Select an AI Role</option>
          <option value="RFT">RFT</option>
          <option value="TAG">TAG</option>
          <option value="BAB">BAB</option>
          <option value="CARE">CARE</option>
        </Input>
      </FormGroup>

      {selectedRole === "RFT" && <InputRFT />}
      {selectedRole === "TAG" && <InputTAG />}
      {selectedRole === "BAB" && <InputBAB />}
      {selectedRole === "CARE" && <InputCARE />}
    </div>
  );
}

export default GenerateCategories;
