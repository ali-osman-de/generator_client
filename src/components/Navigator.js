import React from "react";
import { Navbar,NavbarBrand } from "reactstrap";

function Navigator() {
  return (
    <div>
      <Navbar color="black" dark>
        <NavbarBrand href="/" className="mx-auto fs-4">
          Generator
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Navigator;
