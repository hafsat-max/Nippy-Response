import React from "react";
import location from "../../public/location.png";
import Input from "src/Components/Input";
import { Button } from "@mantine/core";
import ImageCards from "./ImageCards";

const InputSection = () => {
  let arrs = ["State", "Local Government", "Ward/ Area"];

  let options = [
    { value: "react", label: "React" },
    { value: "ng", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "vue", label: "Vue" },
  ];
  let placeholder = ["select state", "Local Government", "Select area"];

  return (
    <section className=" mb-[30px] px-[20px]">
      

      <div className="flex justify-around gap-[50px]">
        {/* LEFT COLUMN */}
        <div>
          <div className="flex justify-center items-center mt-[44px]">
            <span className="w-25">
              <img src={location.src} alt="" />
            </span>
            <span className="font-light text-[40px] leading-[40px] text-black w-[400px] ml-[-60px] fire-p">
              Input the Incident Location to generate contact numbers
            </span>
          </div>

          <div className="flex flex-col gap-[15px]">
            {arrs.map((item, index) => {
              return (
                <Input
                  placeHolder={placeholder[index]}
                  key={index}
                  labelName={item}
                  optionData={options}
                />
              );
            })}
            <Button
              classNames={{
                root: "rounded-[5px] px-[47px] py-[14px] h-[43px]",
              }}
              className="bg-[#BA1419] w-[190px] m-auto mt-[40px]"
            >
              Submit
            </Button>
          </div>
        </div>

        {/* right column */}
        {/* <ImageCards /> */}

      </div>
    </section>
  );
};

export default InputSection;
