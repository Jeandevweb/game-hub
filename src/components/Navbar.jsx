import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/games.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
const Navbar = ({ onSearch }) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
