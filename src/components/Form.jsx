import React from "react";
import { Button } from "react-bootstrap";

const Form = (props) => {
  const { submitHandler, changeHandler, formData, error } = props;

  return (
    <>
      <form className="w-50 mx-auto" onSubmit={submitHandler}>
        <div className="form-group">
          <label>first name:</label>
          <input
            className="form-control"
            type="text"
            placeholder="first name"
            name="first_name"
            value={formData.first_name}
            onChange={changeHandler}
          />
        </div>
        {error.first_name ? (
          <span style={{ color: "red" }}>{error.first_name.message}</span>
        ) : null}
        <div className="form-group">
          <label>last name:</label>
          <input
            className="form-control"
            type="text"
            placeholder="last name"
            name="last_name"
            value={formData.last_name}
            onChange={changeHandler}
          />
        </div>
        {error.last_name ? (
          <span style={{ color: "red" }}>{error.last_name.message}</span>
        ) : null}
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
        {error.email ? (
          <span style={{ color: "red" }}>{error.email.message}</span>
        ) : null}
        <div className="form-group">
          <label>password:</label>
          <input
            className="form-control"
            type="text"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
          />
        </div>
        {error.password ? (
          <span style={{ color: "red" }}>{error.password.message}</span>
        ) : null}
        <div className="form-group">
          <label>confirm password:</label>
          <input
            className="form-control"
            type="text"
            placeholder="confirm password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={changeHandler}
          />
        </div>
        {error.confirmPassword ? (
          <span style={{ color: "red" }}>{error.confirmPassword.message}</span>
        ) : null}
        <div className="button-container">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  );
};

export default Form;
