var express = require("express");
var cors = require("cors");

var app = express();

app.use(function(req, res, next) {
    console.log("This was called");
    next();
});
app.use(express.static("./public"));
app.use("/scripts", express.static("./scripts"));
app.use("/css", express.static("./css"));
app.listen(3000);
console.log("Express app running on port 3000");
module.exports = app;
