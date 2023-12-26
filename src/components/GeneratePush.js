import React from "react";
import { Button } from "reactstrap";

function GeneratePush() {
  return (
    <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }}>
      <Button  color="dark" size="lg">
        Generate
      </Button>
    </div>
  );
}

export default GeneratePush;
