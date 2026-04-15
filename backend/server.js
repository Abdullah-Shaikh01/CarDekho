import express from "express";
import cors from "cors";
import recommendRoute from "./routes/recommend.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/recommend", recommendRoute);

app.listen(5000, () => console.log("Server running on port 5000"));
