import React, { useState } from "react";
import Tour from "./Tour";
import { InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
const Tours = ({ tours }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <InputGroup style={{ width: "13%" }}>
        <Form.Control
          type="text"
          placeholder="Search Tours"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </InputGroup>
      {tours
        .filter((tour) => {
          if (searchTerm === "") {
            return tour;
          } else if (
            tour.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return tour;
          }
        })
        .map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
    </div>
  );
};
export default Tours;
