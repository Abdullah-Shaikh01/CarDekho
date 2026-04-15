import express from "express";
import cors from "cors";
import recommendRoute from "./routes/recommend.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/recommend", recommendRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
