import React from "react";
import imageone from "../../public/imageone.png";
import imagetwo from "../../public/imagetwo.png";
import imagethree from "../../public/imagethree.png";
import imagefour from "../../public/imagefour.png";
import imagefive from "../../public/imagefive.png";

let obj = [
  {
    img: imageone,
    text: "Ambulance Service",
  },
  {
    img: imagetwo,
    text: "Fire Service",
  },
  {
    img: imagethree,
    text: "Security Service",
  },
  {
    img: imagefour,
    text: "Mental Health",
  },
  {
    img: imagefive,
    text: "Health Emergency",
  },
];

const CardLists = () => {
  return (
    <section className="flex flex-row gap-[40px] justify-center items-center mt-[50px] none" >
      {obj.map((item, index) => {
        return (
          <>
            <figure key={index}>
                <img src={item.img.src} alt="" />
                <figcaption className="text-[#555555] text=[12px] text-center ">{item.text}</figcaption>
            </figure>
          </>
        );
      })}
    </section>
  );
};

export default CardLists;
