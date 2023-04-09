import { Button } from "@mantine/core";
import { ListItem } from "@mantine/core/lib/List/ListItem/ListItem";
import { list } from "postcss";
import React from "react";
import tweet from "../../public/twitter.png";
import facebook from "../../public/facebook.png";
import linkedin from "../../public/linkedin.png";
import git from "../../public/git.png";

let list1 = [
  {
    listItems: "Support",
  },
  {
    listItems: "FIre Services",
  },
  {
    listItems: "Ambulance Services",
  },
  {
    listItems: "Health Emergency",
  },
  {
    listItems: "Security Service",
  },
];

let list2 = [
  "Resources",
  "How to get help",
  "First Aid",
  "Hospitals",
  "Signs of Depression",
];

let list3 = [
  {
    text: "Contact us",
  },
  {
    text: "Github",
    icon: git.src,
  },
  {
    text: "LinkedIn",
    icon: linkedin.src,
  },
  {
    text: "Twitter",
    icon: tweet.src,
  },

  {
    text: "Facebook",
    icon: facebook.src,
  },
];

function Footer() {
  return (
    <footer className="bg-[#3D4452] py-[100px] px-[2rem] w-[100%]">
      <div className="flex flex-row justify-around gap-[20px]">
        <ul className="flex flex-col gap-[23px]">
          {list1.map((item, index) => (
            <li key={index} className=" text-white">
              {item.listItems}
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-[23px]">
          {list2.map((item, index) => (
            <li key={index} className=" text-white">
              {item}
            </li>
          ))}
        </ul>

        {/* CONTACT US */}
        <ul className="flex flex-col gap-[23px] third-col">
          {list3.map((item, index) => (
            <li key={index} className=" text-white">
              {item.icon ? (
                <span className="flex gap-[5px] ">
                  <img src={item.icon} alt="" className=" h-[20px]" />
                  {item.text}
                </span>
              ) : (
                <span>{item.text}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <ul className="hidden  icon-ul" >
            {
              list3.map((item, index) =>(
                <li key={index} style={{width:20, height: 20}}>
                   <img src={item.icon} alt="" />
                </li>
              ))
            }
      </ul>
    </footer>
  );
}

export default Footer;
