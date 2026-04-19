import { describe, beforeEach, it, expect } from "vitest";

import { InMemoryBookRepository } from "../../repositories/implementations/__mocks__/InMemoryBookRepository";
import { CreateBookService } from "../CreateBookService";
import { UUID_REGEX } from "@/__tests__/__test-utils__/regex.test-util";

describe("CreateBookService", () => {
  let repository: InMemoryBookRepository;
  let service: CreateBookService;

  beforeEach(() => {
    repository = new InMemoryBookRepository();
    service = new CreateBookService(repository);
  });

  it("should be able to create a book", async () => {
    const payload = { title: "Clean Code", author: "Robert C. Martin" };

    const book = await service.execute({
      title: payload.title,
      author: payload.author,
    });

    expect(book).toHaveProperty("id");
    expect(book.id).toEqual(expect.stringMatching(UUID_REGEX));
    expect(book.title).toBe(payload.title);
    expect(book.author).toBe(payload.author);
  });

  it("should not create book without title", async () => {
    const payload = { title: "", author: "Robert C. Martin" };

    const promise = service.execute({
      title: payload.title,
      author: payload.author,
    });

    await expect(async () => await promise).rejects.toThrow();
  });

  it("should not create book without author", async () => {
    const payload = { title: "Clean Code", author: "" };

    const promise = service.execute({
      title: payload.title,
      author: payload.author,
    });

    await expect(async () => await promise).rejects.toThrow();
  });
});
