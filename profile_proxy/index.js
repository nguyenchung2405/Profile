require("dotenv").config();
const {createProxyMiddleware} = require("http-proxy-middleware");
const express = require("express");
const cors = require("cors");
const { rootRouter } = require("./routers/rootRouter");
const app = express();
const FormData = require('form-data');
const path = require("path");
const bodyParser = require("body-parser")
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// set up static file
// const pathPublicDirectory = path.join(__dirname, "/public");
// app.use("/profile_proxy/public", express.static(pathPublicDirectory));
app.use("/api", rootRouter)
// app.use("api/v2",excel)
app.use(express.static(path.join(__dirname, "../profile/dist")))
console.log(`${process.env.apiUser}`)
module.exports = (app) => {
    app.use(proxy('/api/users/exportation', {
        target: `${process.env.apiUser}`,
        changeOrigin: true,
        pathRewrite:{
            '^/api': '', // remove base path
        
          },
        logLevel: "debug"
    }));
    // mock(app);
}
// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../profile/dist", "index.html"))
    // res.sendFile("index.html", { root: "dist" })
})
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("This is express proxy.")
})