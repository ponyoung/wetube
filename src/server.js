import express from "express";

const PORT = 4000;

const app = express();

const handelHome = (req, res) => {
  return res.send("<h1> I love you. </h1>");
};

const handleLogin = (req, res) => {
  return res.send("login here.");
};

app.get("/", handelHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log("Server listening on port http://localhost:4000");

app.listen(PORT, handleListening);
