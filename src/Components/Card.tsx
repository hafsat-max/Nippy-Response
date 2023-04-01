import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import fire from "../../public/fire.png";

function Cards({ heading, body, image, headingColor, cardBackground, cols,pColor }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className={`col-[${cols}]`}   style={{backgroundColor:cardBackground}}>
      <Card.Section>
        <Image src={image} height={230} alt="Norway" />
      </Card.Section>

      <h2 className=" text-[#BA1419] font-semibold text-600 leading-[58px] text-[36px] text-center" 
      style={{color: headingColor}}
      >
       {heading}
      </h2>

      <p className=" m-auto text-[#555555] text-center" style={{color: pColor}}>
        {body}
      </p>
      <div className="flex justify-center gap-[46px] mt-[10px]">
      <Button classNames={{
        root: 'rounded-[5px] px-[10px] py-[14px] h-[43px]'
      }} className='bg-[#BA1419]'>Generate Contact</Button>

      <Button classNames={{
        root: 'rounded-[5px] px-[25px] py-[14px] h-[43px]'
      }} className="bg-[#007FB6]">Safety Tips</Button>
      </div>
    </Card>
  );
}
export default Cards;
