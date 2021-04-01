import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { userContext } from "../../App";
import "./CheckOut.css";

const CheckOut = () => {
  const { user } = useContext(userContext);
  const { id } = useParams();
  const { displayName, email } = user;
  const [buyProduct, setBuyProduct] = useState({});
  const [checkOut, setCheckOut] = useState(false);

  const { name, price, wight, img } = buyProduct;

  useEffect(() => {
    fetch(`https://cherry-tart-53452.herokuapp.com/buyProduct/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBuyProduct(data);
      });
  }, [id]);

  console.log(user);
  const hendelCheckOut = () => {
    const cheeckOutDetails = { img, name, price, wight, displayName, email, date: new Date() };

    console.log(cheeckOutDetails);

    fetch("https://cherry-tart-53452.herokuapp.com/checkOut", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cheeckOutDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        setCheckOut(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="conatiner">
        {checkOut && <span> SuccessFully place Your Order. Go to Order Page to see Your all Order</span>}

        {!checkOut && (
          <div class="divTable blueTable">
            <div class="divTableHeading">
              <div class="divTableRow">
                <div class="divTableHead">Discription</div>
                <div class="divTableHead">Quintity</div>
                <div class="divTableHead">Price</div>
              </div>
            </div>
            <div class="divTableBody">
              <div class="divTableRow">
                <div class="divTableCell">{buyProduct.name}</div>
                <div class="divTableCell">1</div>
                <div class="divTableCell">${buyProduct.price}</div>
              </div>
            </div>
            <div class="divTableFoot tableFootStyle">
              <div class="divTableRow">
                <div class="divTableCell">Total Price:&nbsp;</div>
                <div class="divTableCell">&nbsp;</div>
                <div class="divTableCell">${buyProduct.price}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {!checkOut && (
        <button onClick={hendelCheckOut} className="btncheckOut">
          Check Out
        </button>
      )}
    </>
  );
};

export default CheckOut;
