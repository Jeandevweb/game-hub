import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenresList from './components/GenresList'
import { useState } from 'react'
import PlateformSelector from './components/PlateformSelector'
import SortSelector from './components/SortSelector'

function App() {
 
  const [gameQuery, setGameQuery] = useState({
    genres: null,
    platforms: null,
    sortOrder: ""
  })


  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenresList
              gameQuery={gameQuery}
              onSelectGenre={(genres) => setGameQuery({ ...gameQuery, genres })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack spacing={5} paddingLeft={3} marginBottom={5}>
            <PlateformSelector
              gameQuery={gameQuery}
              onSelectPlatform={(platforms) =>
                setGameQuery({ ...gameQuery, platforms })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelecteSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App
