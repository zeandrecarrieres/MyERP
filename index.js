require("dotenv").config();
const express = require("express");
const app = express();
//injections
const server = require("./src/server/server");
app.use(server);

const PORT = process.env.PORT || 5800;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    const now = new Date()
    const time = "Start time: " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds('ss');
    console.log(time);
}
);
