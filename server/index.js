const express = require("express");
const app = express();
const path = require("path");
const port = 3001;
const routers = require("./routers/index.js");

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use("/", routers);

app.listen(port, () => {
    console.log(`Listening from port ${port}!`);
})