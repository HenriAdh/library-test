import { Book } from "../../entities/Book";
import { IBookRepository } from "../IBookRepository";

class BookRepository implements IBookRepository {
  #books: Map<string, Book> = new Map();

  async create(data: Book): Promise<Book> {
    this.#books.set(data.id, data);

    return data;
  }

  async findAll(): Promise<Book[]> {
    return [...this.#books.values()];
  }

  async findById(id: string): Promise<Book | null> {
    return this.#books.get(id) ?? null;
  }

  async save(book: Book): Promise<void> {
    this.#books.set(book.id, book);
  }
}

export { BookRepository };
