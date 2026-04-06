import { CreateBookData } from "../dtos/createBookDTO";
import { Book } from "../entities/Book";
import { IBookRepository } from "../repositories/IBookRepository";

export class CreateBookService {
  constructor(private bookRepository: IBookRepository) {}

  async execute(data: CreateBookData) {
    const book = new Book(crypto.randomUUID(), data.title, data.author);

    const created = await this.bookRepository.create(book);

    return created;
  }
}
