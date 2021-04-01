import React, { useState } from "react";
import "./AddProduct.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = useState({});

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const hendelImageUploaded = (e) => {
    const imageData = new FormData();
    imageData.set("key", "d44197f19af0453e3bbce1980ee41405");
    imageData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <div className="form-conatiner">
          <div className="form-contant">
            <label>Product Name </label>
            <input type="text" placeholder="Enter Product Name" name="productName" ref={register({ required: true })} />
            {errors.productName && <span>This field is required</span>}
          </div>
          <div className="form-contant">
            <label>Product price </label>
            <input placeholder="Enter Product price" type="number" name="price" ref={register({ required: true })} />
            {errors.price && <span>This field is required</span>}
          </div>
        </div>
        <div className="form-conatiner">
          <div className="form-contant">
            <label> Wight </label>

            <input placeholder="Enter Product wight" type="text" name="wight" ref={register({ required: false })} />
          </div>
          <div className="form-contant">
            <label>Add Photo </label>

            <input onChange={hendelImageUploaded} type="file" name="img" />
            {errors.img && <span>This field is required</span>}
          </div>
        </div>
      </div>
      <input className="submitForm" type="submit" value="Save" />
    </form>
  );
};

export default AddProduct;
