import express from "express";
import connectDatabase from "./connect.db.js";
import movieRoutes from "./movies/movie.route.js";

const app = express();
// To make app understand Json
app.use(express.json());

// Connect Database
connectDatabase();

// register routes
app.use(movieRoutes);

// app port and server here
const port = 4000;
app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
