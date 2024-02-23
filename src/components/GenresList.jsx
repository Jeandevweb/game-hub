import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenresList = ({ selectedGenre, onSelectGenre }) => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              variant="link"
              fontSize="large"
              fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal' }
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
