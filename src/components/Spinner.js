import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <img src={loading} alt="loading" style={{ width: "60px" }} />
    </div>
  );
};

export default Spinner;
