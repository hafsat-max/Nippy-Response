import React from "react";

const ImageCards = (topic) => {
  return (
    <>
      <h4> Get help from <span>{topic}</span>  Department</h4>
      <div>
        <img src={img} alt="image" />
      </div>
    </>
  );
};

export default ImageCards;
