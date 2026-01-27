import express from "express";
import { pool } from "./db";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.send({ status: "done" });
});

app.get("/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json({ message: "done", result: result.rows });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error", result: err });
  }
});

export default app;
