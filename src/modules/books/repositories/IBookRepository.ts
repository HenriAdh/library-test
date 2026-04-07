import { Book } from "../entities/Book";

interface IBookRepository {
  create(data: Partial<Book>): Promise<Book>;
  findById(id: string): Promise<Book | null>;
  findAll(): Promise<Book[]>;
  save(book: Book): Promise<void>;
}

export type { IBookRepository };
