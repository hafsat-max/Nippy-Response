import React from "react";
import location from "../../public/location.png";
import Input from "src/Components/Input";
import { Button } from "@mantine/core";

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
    <section className="mt-[100px] mb-[30px]">
      <h1 className="text-[#DF181E] font-extrabold leading-[86px] text-[72px] text-center  ">
        Fire Service
      </h1>

      <div className="flex justify-around gap-[50px]">
        {/* LEFT COLUMN */}
        <div>
          <div className="flex justify-center items-center mt-[44px]">
            <span className="w-25">
              <img src={location.src} alt="" />
            </span>
            <span className="font-light text-[40px] leading-[40px] text-black w-[400px] ml-[-60px]">
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

        <div></div>
      </div>
    </section>
  );
};

export default InputSection;
