import React from "react";
import Cards from "./Card";
import { url } from "inspector";
import fire from "../../public/fire.png";
import aid from "../../public/aid.png";
import mental from "../../public/mental.png";
import police from "../../public/police.png";
import ambulance from "../../public/ambulance.png";
import { isNotEmpty } from "@mantine/form";
// import { CardSection } from '@mantine/core/lib/Card';

const data = [
  {
    image: fire.src,
    heading: "Fire Service",
    headingColor: "#BA1419",
    body: "Get help from the fire department or fire brigade. Generate contact of the fire and rescue services within the location of the incident.",
    primaryBtnText: "",
    secondaryBtn: "",
    cardBackground: "#fff",
    pColor: "#555555"
  
  },
  {
    image: aid.src,
    heading: "Health Emergency",
    headingColor: "#F4B2B4",
    body: "Get help from the fire department or fire brigade. Generate contact of the fire and rescue services within the location of the incident.",
    primaryBtnText: "green",
    secondaryBtn: "",
    cardBackground: "#951014",
    pColor: "#ffffff"
 
  },
  {
    image: police.src,
    heading: "Security Service",
    headingColor: "#D4D4D4",
    body: "Get help from the fire department or fire brigade. Generate contact of the fire and rescue services within the location of the incident.",
    primaryBtnText: "",
    secondaryBtn: "",
    cardBackground: "#555555",
    pColor: "#FFFFFF"
  },
  {
    image: mental.src,
    heading: "Mental Health",
    headingColor: "#AADDF3",
    body: "Feeling overwhelmed and need a non-judgemental person to talk to? Start a therapy session with us now.",
    primaryBtnText: "",
    secondaryBtn: "",
    cardBackground: "#004C6D",
    pColor: "#FFFFFF"

  },
  {
    image: ambulance.src,
    heading: "Ambulance Service",
    headingColor: "#BA1419",
    body: "Emergency medical services, also known as ambulance services or paramedic services, This provide contacts for urgent pre-hospital treatment and stabilization for serious illness and injuries and transport to definitive care.",
    primaryBtnText: "",
    secondaryBtn: "",
    cardBackground: "#fff",
    gridCol: "1/3",
    pColor: "#555555",
    cols: "span_1_/_span_3"
  },
  {
    image: ambulance.src,
    heading: "Ambulance Service",
    headingColor: "#BA1419",
    body: "Emergency medical services, also known as ambulance services or paramedic services, This provide contacts for urgent pre-hospital treatment and stabilization for serious illness and injuries and transport to definitive care.",
    primaryBtnText: "",
    secondaryBtn: "",
    cardBackground: "#fff",
    gridCol: "1/3",
    pColor: "#555555",
    cols: "span_1_/_span_3"
  },
];

const Services = () => {
  return (
    <>
      <section className="grid md:grid-cols-2  lg:grid-cols-2  mt-[100px] px-[5px] gap-[20px] w-[90%] mx-auto ">
        {data.map((item, index) => (
          <Cards
            key={index}
            image={item.image}
            heading={item.heading}
            body={item.body}
            headingColor={item.headingColor}
            cardBackground={item.cardBackground}
            pColor ={item.pColor}
            cols= {item.cols}
            
          />
        ))}
      </section>
    </>
  );
};

export default Services;
