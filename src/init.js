import "dotenv/config"; // 가능한한 코드 실행 앞시점에 놓아야함.
import "./db";
import "./models/Video";
import User from "./models/User";
import app from "./server";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
