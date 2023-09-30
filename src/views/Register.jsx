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
        setFormData(formData);
        navigate("/");
      })
      .catch((err) => {
        const validateErr = err.response.data.validation_error.errors;
        const duplicateErr = err.response.data.validation_error.code;
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
        // setError(err.response.data.validation_error.errors);
      });
    setFormData(initialValue);
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
