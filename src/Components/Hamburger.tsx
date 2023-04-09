import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";

function Hamburger({ className, openDrawer }) {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";
  return (
    <Burger
      opened={opened}
      onClick={openDrawer}
      aria-label={label}
      className={className}
    />
  );
}

export default Hamburger;
