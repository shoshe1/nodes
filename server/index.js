const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routers/userroutes");
const preferenceRoutes = require("./routers/preferenceroutes");

const app = express();
dotenv.config();

app.use(express.json());

