import request from "supertest";
import app from "./index";
import { pool } from "./db";

jest.mock("./db", () => ({
  pool: {
    query: jest.fn(),
  },
}));

describe("GET /products", () => {
  test("должен вернуть статус 200 и список продуктов", async () => {
    const mockProducts = [
      { id: 1, name: "Apple" },
      { id: 2, name: "Banana" },
    ];
    (pool.query as jest.Mock).mockResolvedValue({ rows: mockProducts });

    const response = await request(app).get("/products");

    expect(response.statusCode).toBe(200);

    expect(response.body.message).toBe("done");
    expect(Array.isArray(response.body.result)).toBe(true);
    expect(response.body.result).toHaveLength(2);
    expect(response.body.result[0].name).toBe("Apple");
  });

  test("должен вернуть ошибку, если БД недоступна", async () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    (pool.query as jest.Mock).mockRejectedValue(new Error("DB Error"));

    const response = await request(app).get("/products");

    expect(response.body.message).toBe("error");
    expect(response.statusCode).toBe(500);

    consoleSpy.mockRestore();
  });
});
