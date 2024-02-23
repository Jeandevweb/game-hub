import useData from "./useData";

const useGames = (gameQuery) =>
  useData(
    "/games",
    {
      params: {
        genres: gameQuery.genres?.id,
        platforms: gameQuery.platforms?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
