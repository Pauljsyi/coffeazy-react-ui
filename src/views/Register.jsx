import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "../components/Form";

const initialValue = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialValue);
  const [error, setError] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/users/register", formData)
      .then((req, res) => {
        console.log("user created");
        // console.log(formData);
        setFormData(formData);
        navigate("/");
      })
      .catch((err) => {
        console.log("create error");
        const validateErr = err.response.data.validation_error.errors;
        const duplicateErr = err.response.data.validation_error.code;
        console.log({ err });
        console.log({ validateErr });
        console.log({ duplicateErr });
        if (validateErr) {
          return setError(validateErr);
        } else if (duplicateErr === 11000) {
          return setError({
            email: {
              name: "DuplicateError",
              message:
                "There is another user with that email, please choose a different email",
            },
          });
        }
        // console.log(err.response.data.validation_error);
        // console.log(err.response.data.validation_error.errors);
        // setError(err.response.data.validation_error.errors);
      });
    setFormData(initialValue);
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // console.log(formData);
  return (
    <div>
      <h1>Register</h1>
      <Form
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        formData={formData}
        error={error}
      />
    </div>
  );
};

export default Register;
