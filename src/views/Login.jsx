import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import Form from "../components/Form";

const initialValue = {
  email: "",
  password: "",
};

const Login = () => {
  //   const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialValue);
  const [error, setError] = useState({});
  const [passwordErr, setPasswordErr] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/users/login`, formData)
      .then((req, res) => {
        console.log("req", req);
        if (req.data.code === "PASSWORD_ERR") {
          return setPasswordErr(req.data);
        }
        setFormData(formData);

        navigate("/");
        // console.log("res", res);
      })
      .catch((err) => {
        console.log("error", err.response.data);
        setError(err.response.data);
      });
  };

  // DISPLAY USERS FOR TESTING
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/users`)
      .then((res) => {
        console.log("response object", Array.isArray(res.data.users));
        setUsers(res.data.users);
      })
      .catch((e) => console.error("you did something wrong", e));
  }, []);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form className="w-50 mx-auto" onSubmit={submitHandler}>
        <h1>Login</h1>
        <div className="form-group">
          <label>email:</label>
          <input
            className="form-control"
            type="text"
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />
        </div>
        {error.code === "EMAIL_NOT_FOUND" ? (
          <span style={{ color: "red" }}>{error.message}</span>
        ) : null}
        <div className="form-group">
          <label>password:</label>
          <input
            className="form-control"
            type="password"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
          />
        </div>
        {passwordErr.code === "PASSWORD_ERR" ? (
          <span style={{ color: "red" }}>{passwordErr.message}</span>
        ) : null}
        <div className="button-container">
          <Button type="submit">Submit</Button>
        </div>
      </form>
      <Table className="d-flex justify-content-center" striped bordered hover>
        <tbody>
          {users.map((user, idx) => (
            <tr key={user._id}>
              <td>
                {user.first_name} {user.last_name}
              </td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Login;
