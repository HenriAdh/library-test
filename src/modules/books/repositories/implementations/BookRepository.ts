import { prisma } from "@/shared/lib/prisma";
import { Book } from "../../entities/Book";
import { IBookRepository } from "../IBookRepository";

class BookRepository implements IBookRepository {
  async create(data: Book): Promise<Book> {
    const book = await prisma.book.create({ data });

    return book;
  }

  async findAll(): Promise<Book[]> {
    const books = await prisma.book.findMany();

    return books;
  }

  async findById(id: string): Promise<Book | null> {
    const book = await prisma.book.findUnique({ where: { id } });

    return book;
  }

  async save({ id, title, author, available, active }: Book): Promise<void> {
    await prisma.book.update({
      where: { id: id },
      data: { title, author, available, active },
    });
  }
}

export { BookRepository };
