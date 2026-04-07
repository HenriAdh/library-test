import { BookCreateInput } from "@generated/models";
import { Book } from "@generated/client";

interface IBookRepository {
  create(data: BookCreateInput): Promise<Book>;
  findById(id: string): Promise<Book | null>;
  findAll(): Promise<Book[]>;
  save(book: Book): Promise<void>;
}

export type { IBookRepository };
