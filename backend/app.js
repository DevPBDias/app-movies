import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDatabase from "./src/data/dataMongoDB.js";
import userRoute from "./src/routes/user.route.js";
import loginRoute from "./src/routes/login.route.js";
import movieRoute from "./src/routes/movie.route.js";

const app= express();

connectDatabase();
app.use(cors());
app.use(express.json());
app.use("/user", userRoute);
app.use("/login", loginRoute);
app.use("/movie", movieRoute);


export default app;