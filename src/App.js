import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
import React, { useState } from "react";
import Joi from "joi-browser";
import { toast, ToastContainer } from "react-toastify";

const App = () => {
  const [name, setName] = useState("hasan");
  const [formData, setFormData] = useState({});
  const [errorsFrom, setError] = useState({});
  const [isValid, setIsValid] = useState(
    errorsFrom && Object.keys(errorsFrom).length > 0 ? true : false
  );
  const schema = {
    name: Joi.string().required().label("name"),
    family: Joi.string().required().label("family"),
    city: Joi.string().required().label("city"),
  };
  const changeText = () => {
    setName("reza");
  };

  const validate = (data) => {
    setFormData(data);

    console.log("validate", data);
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, schema, options);
    if (!error) {
      setError({});
      setIsValid(false);
      return null;
    }
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;

    setError(errors);
    setIsValid(true);

    return errors;
  };
  const passParams = (p) => {
    const err = validate(formData);
    if (err && Object.keys(err).length > 0) toast.error("fill all data");
    else toast.success("set data success");
    console.log("passParams", p);
    // setError(err);
  };

  return (
    <div className="App">
      <ToastContainer position="bottom-right" />
      <Card
        className="card"
        validate={validate}
        title="card"
        errors={errorsFrom}
        name={name}
        passParams={passParams}
        isValid={isValid}
      >
        <p>my text</p>
      </Card>
      <button onClick={changeText}>setName Click</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};

export default App;
