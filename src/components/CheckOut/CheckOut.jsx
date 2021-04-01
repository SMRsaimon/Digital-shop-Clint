import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./CheckOut.css";

const CheckOut = () => {
  const { id } = useParams();

  const [buyProduct, setBuyProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/buyProduct/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBuyProduct(data);
      });
  }, [id]);

  return (
    <>
      <div className="conatiner">
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
      </div>
      <button className="btncheckOut">Check Out</button>
    </>
  );
};

export default CheckOut;
