import React, { useEffect, useState } from "react";
import kevitApi from "../kevitApi";
import $ from "jquery";
const Order = ({ authorization, label, theader }) => {
  //State
  const [lists, setLists] = useState([]);
  const [search, setSearch] = useState("");
  const auth = authorization;
  //useEffect Hooks
  useEffect(() => {
    kevitApi
      .get("/order", {
        headers: {
          authorization: auth,
        },
      })
      .then((response) => {
        setLists(response.data.data);
      });
  }, [search]);

  //jQuey
  $(document).ready(() => {
    $("#myInput").on("keyup", () => {
      var value;
      if ($(this).val() !== undefined && $(this).val()) {
        value = $(this).val().toLowerCase();
      }
      $("#myTable tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });

  //Table Header

  const tableHeader = theader.map((header, index) => {
    return (
      <React.Fragment key={header}>
        <th>{header}</th>
      </React.Fragment>
    );
  });

  const tableBody = lists.map((list, index) => {
    return (
      <tr key={index}>
        <td>{list.customerName || "Kalpesh"}</td>
        <td>{list.paymentMethod || "CASH"}</td>
        <td>{list.orderStatus || "CANCELLED"}</td>
      </tr>
    );
  });

  return (
    <div className="container mt-3">
      <center>
        <h2>{label}</h2>
      </center>
      <input
        className="form-control"
        placeholder="Search..."
        id="myInput"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      <table className="table table-bordered">
        <thead>
          <tr>{tableHeader}</tr>
        </thead>
        <tbody id="myTable">{tableBody}</tbody>
      </table>
    </div>
  );
};
export default Order;
