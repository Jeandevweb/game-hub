import useData from "./useData";

const useGames = (gameQuery) =>
  useData(
    "/games",
    {
      params: {
        genres: gameQuery.genres?.id,
        platforms: gameQuery.platforms?.id,
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery]
  );

export default useGames;
