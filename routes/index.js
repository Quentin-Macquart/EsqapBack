const gamesRouter = require("./games");

const setupRoutes = (app) => {
  app.use("/games", gamesRouter);
};

module.exports = {
  setupRoutes,
};
