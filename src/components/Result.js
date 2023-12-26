import React from "react";
import { Card, CardBody, CardText } from "reactstrap";

function Result() {
  return (
    <div>
      <Card
        color="light"
        style={{
          width: "18rem",
          position: "absolute",
          top: "100%",
          left: "100%",
          transform: "translate(-150%, -10%)",
        }}
      >
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card‘s content.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Result;
