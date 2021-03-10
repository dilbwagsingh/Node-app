const express = require("express");
const app = express();
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRouter = require("./routes/shop");
const errorRouter = require("./routes/404");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRouter);
app.use(errorRouter);

app.listen(3000);
