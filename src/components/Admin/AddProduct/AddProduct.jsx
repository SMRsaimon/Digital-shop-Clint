import React, { useEffect, useState } from "react";
import "./AddProduct.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";

const AddProduct = () => {
  const [imgURL, setImgURL] = useState(null);

  const [response, setResponse] = useState(null);

  const hendelImageUploaded = (e) => {
    const imageData = new FormData();
    imageData.set("key", "d44197f19af0453e3bbce1980ee41405");
    imageData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((response) => {
        setImgURL(response.data.data.display_url);
      })
      .catch((error) => {
        console.log("img error", error);
      });
  };
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const productInfo = {
      name: data.productName,
      price: data.price,
      wight: data.wight,
      img: imgURL,
    };

    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setResponse(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setInterval(() => {
      setResponse(false);
    }, 8000);
  }, [setResponse]);

  console.log(response);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {response && (
        <span className="successMessage">
          <CheckCircleOutlineRoundedIcon /> SuccessFully added
        </span>
      )}
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

            <input onChange={hendelImageUploaded} type="file" name="img" ref={register({ required: true })} />
            {errors.img && <span>This field is required</span>}
          </div>
        </div>
      </div>

      <input className="submitForm" type="submit" value="Save" />
    </form>
  );
};

export default AddProduct;
