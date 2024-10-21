export const duckDuckGoose = (players, goose) =>
    players[(goose - 1) % players.length].name
