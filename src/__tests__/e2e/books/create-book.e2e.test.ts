import { setupServer } from "@/server";
import { FastifyInstance } from "fastify";
import request from "supertest";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { UUID_REGEX } from "../../__test-utils__/regex.test-util";
import { makeBookPayload } from "@/__tests__/factories/books/makeBook";
import { setupFaker } from "@/__tests__/__test-utils__/setupFaker.test-util";

describe("Create book (E2E)", () => {
  let app: FastifyInstance;

  beforeAll(async () => {
    app = await setupServer();
    await app.ready();

    setupFaker();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should create a book", async () => {
    const payload = makeBookPayload();

    const response = await request(app.server).post("/books").send(payload);

    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: expect.stringMatching(UUID_REGEX),
        title: payload.title,
        author: payload.author,
      }),
    );
  });

  it("should not create a book without title", async () => {
    const payload = makeBookPayload({ title: "" });

    const response = await request(app.server).post("/books").send(payload);

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toMatch(/titulo/i);
  });

  it("should not create a book without author", async () => {
    const payload = makeBookPayload({ author: "" });

    const response = await request(app.server).post("/books").send(payload);

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toMatch(/autor/i);
  });
});
