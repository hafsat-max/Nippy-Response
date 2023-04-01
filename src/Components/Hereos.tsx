import { Button } from "@mantine/core";
import { url } from "inspector";
import React from "react";
import hero from "../../public/heroes-img.png";
import overlay from "../../public/overlay.png"
const Hereos = () => {
  return (
    <section
      style={{ backgroundImage: `url(${hero.src}),  linear-gradient(45deg, #030303, transparent)` }}
      className=" bg-cover bg-center mt-[70px]"
    >

    <div className="w-[90%] flex justify-between  h-[400px] p-[20px] m-auto">

      <div className="flex flex-col [500px]:w-full md:w-flex">
          <h3 className="font-normal text-[52px] leading-[62px] text-[#DF181E] w-[450px]">Get help <span className="text-[#AADDF3]">at the tip of your fingers </span> <span className="text-[#EA6569]">with Nippy Response</span> </h3>

        <p className="font-normal text-[18px] leading-[26px] text-[#ffffff] w-[460px] mt-[28px]">Get help by emergency responses and safety awareness during emergency situations (Inferno, Accidents, Robbery e.t.c)</p>

        <div className="flex  gap-[36px] pt-[10px] mt-[12px]">
          <Button classNames={{
            root: "rounded-[5px] px-[47px] py-[14px] h-[43px]",
          }}  className="bg-[#BA1419] z-[1]">Get Help</Button>
          <Button classNames={{
            root: "rounded-[5px] px-[25px] py-[14px] h-[43px]",
          }}  className=" bg-[#007FB6]">Get Safety Tips</Button>

        </div>
      </div>

      <div className="align-center self-center sm:hidden md:block">
        <img src={overlay.src} alt="" />
      </div>
    </div>

    </section>
  );
};

export default Hereos;
