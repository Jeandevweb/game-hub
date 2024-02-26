import { Heading } from "@chakra-ui/react";

const GameHeading = ({ gameQuery }) => {
  const heading = `${gameQuery.platforms?.name || ""} ${gameQuery.genres?.name || ""} Game `;

  return <Heading as="h1" marginY={5} fontSize='5xl'>{heading}</Heading>;
};

export default GameHeading;
