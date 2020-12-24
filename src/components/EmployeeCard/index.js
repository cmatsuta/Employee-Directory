import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <thead>
      <tr>
        <th>
          <img alt={props.user.name.first} src={props.user.picture.thumbnail} />
        </th>
        <td>{props.user.name.first}</td>
        <td>{props.user.name.last}</td>
        <td>{props.user.email}</td>
        <td>{props.user.phone}</td>
        <td>{props.user.location.city}</td>
      </tr>
    </thead>
  );
}

export default EmployeeCard;
