const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");
require("./conn")
require("dotenv").config();






const productRoutes = require("./routes/product");

app.use(express.json());
app.use(cors());

app.use("/api/products", productRoutes)

app.listen(PORT, () => {
  console.log(`server start at port no ${PORT}`);
});
