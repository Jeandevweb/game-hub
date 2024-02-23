import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenresList from './components/GenresList'
import { useState } from 'react'
import PlateformSelector from './components/PlateformSelector'

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null)
  const [selectedPlatform, setSelectedPlatform] = useState(null)



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
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlateformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App
