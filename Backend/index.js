import express, { urlencoded } from "express";
import dotenv from "dotenv";
import dbConnection from "./utils/dbConnection.js";
import bookRouter from "./routes/bookRoutes.js";
import userRouter from "./routes/userRoutes.js";
import conactRouter from "./routes/ContactRoutes.js";
import cors from "cors";
dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND,
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/book", bookRouter);
app.use("/user", userRouter);
app.use("/contact", conactRouter);

dbConnection();
app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
