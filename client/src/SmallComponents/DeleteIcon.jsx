import React from "react";
import ReactTooltip from "react-tooltip";
const DeleteIcon = props => {
  return (
    <span>
      <ReactTooltip />
      <img
        data-tip="Delete Task"
        style={{ width: 18, height: 18 }}
        src="https://image.flaticon.com/icons/svg/59/59836.svg"
        alt="Delete Task"
      />
    </span>
  );
};

export default DeleteIcon;
