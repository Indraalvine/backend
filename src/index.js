require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.SERVER_PORT || 3000;
const { sequelize } = require("./models");

const productRouter = require("./routes/product.route");
const userRouter = require("./routes/user.route");
const postRouter = require("./routes/post.route");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

sequelize
  .authenticate()
  .then(function (error) {
    console.log("database connnection success");
  })
  .catch(function (error) {
    console.log("unable to connect" + error);
  });

app.get("/", (req, res) => {
  res.send({ Name: "myProductAPI", version: "1.0.0", author: "indra" });
});

app.use("/api/products", productRouter);
app.use("/api/user", userRouter);
app.use("/api/postnew", postRouter)

app.listen(PORT, () => {
  console.log("Server is runninng on" + PORT);
});
