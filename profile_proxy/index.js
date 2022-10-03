const express = require("express");
const cors = require("cors");
const { rootRouter } = require("./routers/rootRouter");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api",rootRouter)


const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log("This is express proxy.")
})