const express = require("express");
const app = express();
const path = require("path");
const rootDir = require("./utils/path");

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const errorRouter = require("./routes/404");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminRouter);
app.use(shopRouter);
app.use(errorRouter);

app.listen(3000);
