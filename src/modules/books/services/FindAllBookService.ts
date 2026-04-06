import { IBookRepository } from "../repositories/IBookRepository";

export class FindAllBookService {
  constructor(private bookRepository: IBookRepository) {}

  async execute() {
    const created = await this.bookRepository.findAll();

    return created;
  }
}
