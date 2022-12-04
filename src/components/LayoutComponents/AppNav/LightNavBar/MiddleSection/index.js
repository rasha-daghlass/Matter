import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
let middleSectionItem = [
  { id: 0, title: "SHOP" },
  { id: 1, title: "FABRIC" },
  { id: 2, title: "JOURNAL" },
  { id: 3, title: "ABOUT" },
];

const MiddleSection = () => {
  return (
    <Nav className="me-auto">
      {middleSectionItem.map((item) => {
        return (
          <NavDropdown title={item.title} key={item.id}>
            <NavDropdown.Item>Action</NavDropdown.Item>
            <NavDropdown.Item>Another action</NavDropdown.Item>
            <NavDropdown.Item>Something</NavDropdown.Item>

            <NavDropdown.Item>Separated link</NavDropdown.Item>
          </NavDropdown>
        );
      })}
    </Nav>
  );
};

export default MiddleSection;
