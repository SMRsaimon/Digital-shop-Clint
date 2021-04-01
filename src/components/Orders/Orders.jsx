import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import "./Orders.css";

const Orders = () => {
  const { user } = useContext(userContext);

  const [order, setOrder] = useState([]);

  console.log(order, "Order");

  useEffect(() => {
    fetch("http://localhost:5000/Order?email=" + user.email)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  return (
    <div className="OrderConatiner">
      <h1>Order Summary </h1>

      <div className="contantContainer">
        {order?.map((x, index) => (
          <div className="conatnt">
            <p>
              {index + 1}.&nbsp;{x.name} <span>Price:&nbsp; ${x.price}</span>{" "}
              <span>Order Date:&nbsp; {new Date(x.date).toDateString("mm/dd/yyyy")}</span>
            </p>
          </div>
        ))}

        {order.length === 0 && <span> No Order History </span>}
      </div>
    </div>
  );
};

export default Orders;
//  name: 'Horlicks',
// price: '456',
// wight: '1.5',
// img: 'https://i.ibb.co/0hhmkn6/horlicks.png',
// displayName: 'saimon cse',
// email: 'saimoncse333@gmail.com',
// date: '2021-04-01T08:01:33.318Z'
