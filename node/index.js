const express = require("express");
const app = express();
const logger = require("morgan");
const http = require("http");
const path = require("path");
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const baseAPI = "/api/v1";
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function(req, res) {
  res.send("Hello World!");
});

const moviesService = require("./routes/movies-service");
const movies = require("./routes/movies");
app.use("/movies", movies);
const server = http.createServer(app);
moviesService.connectDb(function(err) {
  if (err) {
    console.log("Could not connect with MongoDB–moviesService");
    process.exit(1);
  }
  server.listen(PORT, function() {
    console.log("Server up and running on localhost:" + PORT);
  });
});
