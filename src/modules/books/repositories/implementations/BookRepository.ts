import { prisma } from "@/shared/lib/prisma";
import { IBookRepository } from "../IBookRepository";
import { BookCreateInput } from "@generated/models";
import { Book } from "@generated/client";

class BookRepository implements IBookRepository {
  async create(data: BookCreateInput): Promise<Book> {
    return prisma.book.create({ data });
  }

  async findAll(): Promise<Book[]> {
    return prisma.book.findMany();
  }

  async findById(id: string): Promise<Book | null> {
    return prisma.book.findUnique({ where: { id } });
  }

  async save({ id, title, author, available, active }: Book): Promise<void> {
    await prisma.book.update({
      where: { id },
      data: { title, author, available, active },
    });
  }
}

export { BookRepository };
