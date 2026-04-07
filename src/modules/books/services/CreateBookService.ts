import { CreateBookData } from "../dtos/createBookDTO";
import { IBookRepository } from "../repositories/IBookRepository";

export class CreateBookService {
  constructor(private bookRepository: IBookRepository) {}

  async execute({ author, title }: CreateBookData) {
    const created = await this.bookRepository.create({ author, title });

    return created;
  }
}
