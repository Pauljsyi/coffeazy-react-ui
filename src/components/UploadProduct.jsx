import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const initialValue = {
  product_name: "",
  price: 1,
  description: "",
  image: "",
};

const UploadProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialValue);
  //   const [newImage, setNewImage] = useState("");
  const [error, setError] = useState({});

  const submitHandler = (e) => {
    console.log(formData);
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products/upload", formData)
      .then((req, res) => {
        console.log("product uploaded");
        setFormData(formData);
        navigate("/");
      })
      .catch((err) => {
        console.log("upload error", err);
      });
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const imageHandler = (e) => {
    console.log(e.target.files[0]);
    setFormData({ ...formData, image: e.target.files[0] });
  };

  //   console.log(formData);

  return (
    <div>
      <h3>Authorized owner page</h3>
      <form onSubmit={submitHandler} encType="multipart/form-data">
        <div className="form-group">
          <label>product name</label>
          <input
            type="text"
            name="product_name"
            className="form-control"
            onChange={changeHandler}
            value={formData.product_name}
          />
        </div>
        <div className="form-group">
          <label>price</label>
          <input
            type="number"
            name="price"
            className="form-control"
            onChange={changeHandler}
            value={formData.price}
          />
        </div>
        <div className="form-group">
          <label>description</label>
          <input
            type="text"
            name="description"
            className="form-control"
            onChange={changeHandler}
            value={formData.description}
          />
        </div>
        <div className="form-group">
          <label>image</label>
          <input
            type="file"
            name="image"
            accept=".jpg, .png, .jpeg"
            className="form-control"
            onChange={imageHandler}
          />
        </div>
        <Button type="submit">Upload</Button>
      </form>
    </div>
  );
};

export default UploadProduct;
