import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Combo from "./components/base/combo";
import Input from "./components/base/input";
import Button from "./components/base/button";

// import "./components/formStyle.scss";

import styled from "styled-components";

const Card = ({
  className,
  children,
  title,
  name,
  passParams,
  errors,
  validate,
  isValid,
}) => {
  console.log(
    `%cCard : ${className} ${title} ${name}`,
    "background:green",
    errors
  );

  const [data, setData] = useState({});

  const changeHandle = ({ target: input }) => {
    console.log(input.name, input.value);
    data[input.name] = input.value;
    setData((prev) => {
      validate({ ...prev, ...data });
      return { ...prev, ...data };
    });
  };

  const comboCity = [
    { id: "", title: "" },
    { id: 1, title: "TEH" },
    { id: 2, title: "KRJ" },
    { id: 3, title: "ESF" },
  ];

  const FromBody = styled.div`
    margin: 10%;
    padding: 15px;
    box-shadow: 0 0 20px 4px #cccccc;
    border-radius: 15px;
    h2 {
      text-align: center;
      font-size: 2em;
    }
    h4 {
      text-align: center;
    }
    input,
    select {
      border: 1px solid ${isValid ? "red" : "gray"};
    }
  `;

  return (
    <FromBody isValid={isValid} className={className}>
      <h2>{title}</h2>
      <h4>{name}</h4>
      <div>
        <h4>{children}</h4>
        <p>
          name: {data.name} family: {data.family} city:{data.city}
        </p>

        <Row>
          <Col md={3}>
            <Input
              name="name"
              value={data.name}
              changeHandle={changeHandle}
              label="name"
              errors={errors}
            />
          </Col>
          <Col md={3}>
            <Input
              name="family"
              value={data.family}
              changeHandle={changeHandle}
              label="family"
              errors={errors}
            />
          </Col>
          <Col md={3}>
            <Combo
              name="city"
              label="City"
              value={data.city}
              changeHandle={changeHandle}
              options={comboCity}
              errors={errors}
            />
          </Col>
          <Col
            md={3}
            className="d-flex align-items-center justify-content-center"
          >
            <Button onClick={() => passParams(data)}>Click</Button>
          </Col>
        </Row>

        {/* <button onClick={() => passParams(data)}>passParams</button> */}
      </div>
    </FromBody>
  );
};

export default Card;
