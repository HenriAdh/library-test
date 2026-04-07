import { Book } from "@generated/client";
import { IBookRepository } from "../../IBookRepository";
import { BookCreateInput } from "@generated/models";

class InMemoryBookRepository implements IBookRepository {
  #books: Book[] = [];

  async create(data: BookCreateInput): Promise<Book> {
    const book: Book = {
      ...data,
      id: crypto.randomUUID(),
      available: true,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.#books.push(book);

    return book;
  }

  async findAll(): Promise<Book[]> {
    return this.#books;
  }

  async findById(id: string): Promise<Book | null> {
    return this.#books.find((book) => book.id === id) || null;
  }

  async save({ id, title, author, available, active }: Book): Promise<void> {
    const index = this.#books.findIndex((book) => book.id === id);

    this.#books[index] = {
      ...this.#books[index],
      title,
      author,
      available,
      active,
    };
  }
}

export { InMemoryBookRepository };
