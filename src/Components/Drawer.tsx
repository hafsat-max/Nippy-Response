import { Drawer, Button, Group } from "@mantine/core";
import { navList } from "./Header";

function Modal({opened, close}) {

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Nippy Response" size="45%">
        <ul className="flex flex-col gap-[32px]  justify-around">
          {navList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        
      </Drawer>



    </>
  );
}
export default Modal;
