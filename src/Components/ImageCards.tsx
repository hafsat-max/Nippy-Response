import React from "react";
import policeCard from "../../public/police-card.png"
import aidCard from "../../public/aidCard.png"
import fireCard from "../../public/fireCard.png"
import mentalCard from "../../public/mentalCard.png"
import ambuCard from "../../public/ambuCard.png"

// const topic = [
//   {
//     image : fireCard,
//     text : "Fire Department"
//   },
//   {
//     image: aidCard,
//     text: "Nearest Hospital"
//   },
//   {
//     image: mentalCard,
//     text : "Police Station"
//   },
//   {
//     image: ambuCard,
//     text: "Ambulance Station"
//   }
// ];

const ImageCards = ({ subHeading, image, color}) => {
  return (
    <section className="flex flex-col gap-[20px] justify-around self-start mt-[55px]  image-card">
      <h4 className=" font-bold  fire-img-heading text-[#004C6D]">
        Get help from
        <p style={{color: color}}>{subHeading }</p>
      </h4>
      <div>
        <img src={image} alt="image" />
      </div>
    </section>
  );
};

export default ImageCards;
