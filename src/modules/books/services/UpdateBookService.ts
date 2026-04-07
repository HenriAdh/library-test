import { NotFoundException } from "@/shared/utils/Exceptions";
import { IBookRepository } from "../repositories/IBookRepository";
import { UpdateBookBody } from "../dtos/updateBookDTO";

export class UpdateBookService {
  constructor(private bookRepository: IBookRepository) {}

  async execute({ id, ...data }: UpdateBookBody & { id: string }) {
    const book = await this.bookRepository.findById(id);

    if (!book) throw new NotFoundException("Livro não encontrado");

    book.title = data.title ?? book.title;
    book.author = data.author ?? book.author;
    book.available = data.available ?? book.available;

    await this.bookRepository.save(book);

    return book;
  }
}
