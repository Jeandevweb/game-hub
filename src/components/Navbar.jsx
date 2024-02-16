import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/web.png";
import ColorModeSwitch from "./ColorModeSwitch";
const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px" >
      <Image src={logo} boxSize="60px" />
     <ColorModeSwitch/>
    </HStack>
  );
};

export default Navbar;