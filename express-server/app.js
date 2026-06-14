import "dotenv/config";
import express from "express";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", productRoutes);

const PORT = 4000;
const HOST = "0.0.0.0";
app.listen(PORT, HOST, () => {
    console.log("Express app listening on port:", PORT);
});
