import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import "./ManageProduct.css";

const ManageProduct = () => {
  const [manageProduct, setManageProduct] = useState([]);
  const [deleteIteam, setDeleteIteam] = useState(false);

  useEffect(() => {
    fetch("https://cherry-tart-53452.herokuapp.com/home")
      .then((res) => res.json())
      .then((data) => {
        setManageProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const hendelDelete = (id) => {
    fetch("https://cherry-tart-53452.herokuapp.com/deleteProduct/" + id, {
      method: "DELETE",
      headers: {
        "Contant-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          removeItean();
        }
      });
  };

  const removeItean = () => {
    fetch("https://cherry-tart-53452.herokuapp.com/home")
      .then((res) => res.json())
      .then((data) => {
        setManageProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="manageContainerHeading">
        <div className="name">
          <span> ProductName</span>
        </div>
        <div className="wigth">
          <span> Wigth</span>
        </div>
        <div className="price">
          <span> Price</span>
        </div>
        <div className="action">
          <span> Action</span>
        </div>
      </div>

      {manageProduct.length === 0 ? (
        <div className="spinner-manage-page">
          <Loader type="Circles" color="#00BFFF" height={100} width={100} />
        </div>
      ) : (
        manageProduct.map((x) => (
          <>
            <div className="manageContainer">
              <span> {x.name}</span> <span> {x.wight}</span> <span> ${x.price}</span>
              <button onClick={() => hendelDelete(x._id)}> Delete</button>
            </div>
          </>
        ))
      )}
    </div>
  );
};

export default ManageProduct;
