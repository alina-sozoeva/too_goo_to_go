import express from "express";
import { pool } from "./db";
import cors from "cors";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.send({ status: "done" });
});

app.use(
  cors({
    origin: "*",
  }),
);

app.get("/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json({ message: "done", result: result.rows });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error", result: err });
  }
});

app.post("/add-product", async (req, res) => {
  const { title, description } = req.body;
  try {
    await pool.query(
      `INSERT INTO products (title, description)
      VALUES ($1, $2);
      `,
      [title, description],
    );
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ message: "error", result: err });
  }
});

export default app;
