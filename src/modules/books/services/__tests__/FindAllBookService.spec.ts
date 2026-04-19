import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryBookRepository } from "../../repositories/implementations/__mocks__/InMemoryBookRepository";
import { FindAllBookService } from "../FindAllBookService";
import { UUID_REGEX } from "@/__tests__/__test-utils__/regex.test-util";

describe("FindAllBookService", () => {
  let repository: InMemoryBookRepository;
  let service: FindAllBookService;

  beforeEach(async () => {
    repository = new InMemoryBookRepository();

    await repository.create({
      author: "Robert C. Martin",
      title: "Clean Code",
    });
    await repository.create({
      author: "Andrew Hunt/David Tomas",
      title: "The Pragmatic Programmer",
    });
    await repository.create({
      author: "Aditya Bhargava",
      title: "Grokking Algorithms",
    });
    await repository.create({ author: "Martin Fowler", title: "Refactoring" });
    await repository.create({
      author: "Robert C. Martin",
      title: "Clean Architecture",
    });

    service = new FindAllBookService(repository);
  });

  it("should list all books", async () => {
    const books = await service.execute();

    expect(books).toEqual(expect.any(Array));
    expect(books).toHaveLength(5);
    expect(books).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ title: "The Pragmatic Programmer" }),
        expect.objectContaining({ author: "Aditya Bhargava" }),
        expect.objectContaining({ id: expect.stringMatching(UUID_REGEX) }),
      ]),
    );
  });

  it("should return empty array when no books exist", async () => {
    repository = new InMemoryBookRepository();
    service = new FindAllBookService(repository);

    const books = await service.execute();

    expect(books).toHaveLength(0);
  });
});
