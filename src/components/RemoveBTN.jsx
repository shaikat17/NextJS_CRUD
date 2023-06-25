import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const RemoveBTN = () => {
  return (
    <div className="text-red-500 cursor-pointer">
      <FaTrashAlt size={24} />
    </div>
  );
};

export default RemoveBTN;
