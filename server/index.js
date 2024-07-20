const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routers/userroutes");
const preferenceRoutes = require("./routers/preferenceroutes");

const app = express();
dotenv.config();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/preferences", preferenceRoutes);
const PORT = process.env.PORT || 3000;
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});