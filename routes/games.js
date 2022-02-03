const gamesRouter = require("express").Router();
const { db } = require("../conf");

// ------------------------------------------GET GAMES
gamesRouter.get("/", async (req, res) => {
  try {
    const sql = "SELECT * FROM Games";
    const [games] = await db.query(sql);
    res.status(201).json(games);
  } catch (err) {
    res.status(400).send(err);
  }
});

gamesRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "SELECT * FROM Games WHERE Games.id=?";
    const [details] = await db.query(sql, [id]);
    res.status(200).json(details);
  } catch (err) {
    res.status(400).send(err);
  }
});

// -------------------------------------------------------GET CHALLENGES
gamesRouter.get("/:id/challenges", async (req, res) => {
  try {
    const { id } = req.params;
    const sql =
      "SELECT * FROM Challenges RIGHT JOIN Games ON Games.id = Challenges.gamesId WHERE Games.id = ?";
    const [challenges] = await db.query(sql, [id]);
    res.status(201).json(challenges);
  } catch (err) {
    res.status(400).send(err);
  }
});

// -----------------------------------------Get Solutions

gamesRouter.get("/:id/solution", async (req, res) => {
  try {
    const { id } = req.params;
    const sql =
      "SELECT Solutions.solution, Solutions.indices, Solutions.backgroundImg FROM Solutions INNER JOIN Challenges ON Challenges.id = Solutions.challengeId INNER JOIN Games ON Challenges.gamesId = Games.id Where Games.id=?";
    const [solutions] = await db.query(sql, [id]);
    res.status(201).json(solutions);
  } catch (err) {
    res.status(400).send(err);
  }
});

gamesRouter.get("/:id/challenges1", async (req, res) => {
  try {
    const { id } = req.params;
    const sql =
      'SELECT * FROM Challenges WHERE Challenges.gamesId =? AND Challenges.number="1";';
    const [challenges] = await db.query(sql, [id]);
    res.status(201).json(challenges);
  } catch (err) {
    res.status(400).send(err);
  }
});

gamesRouter.get("/:id/challenges2", async (req, res) => {
  try {
    const { id } = req.params;
    const sql =
      'SELECT * FROM Challenges WHERE Challenges.gamesId =? AND Challenges.number="2";';
    const [challenges] = await db.query(sql, [id]);
    res.status(201).json(challenges);
  } catch (err) {
    res.status(400).send(err);
  }
});

gamesRouter.get("/:id/challenges3", async (req, res) => {
  try {
    const { id } = req.params;
    const sql =
      'SELECT * FROM Challenges WHERE Challenges.gamesId =? AND Challenges.number="3";';
    const [challenges] = await db.query(sql, [id]);
    res.status(201).json(challenges);
  } catch (err) {
    res.status(400).send(err);
  }
});

gamesRouter.get("/:id/challenges4", async (req, res) => {
  try {
    const { id } = req.params;
    const sql =
      'SELECT * FROM Challenges WHERE Challenges.gamesId =? AND Challenges.number="4";';
    const [challenges] = await db.query(sql, [id]);
    res.status(201).json(challenges);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = gamesRouter;
