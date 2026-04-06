import { NotFoundException } from "@/shared/utils/Exceptions";
import { IBookRepository } from "../repositories/IBookRepository";

export class FindBookByIdService {
  constructor(private bookRepository: IBookRepository) {}

  async execute(id: string) {
    const book = await this.bookRepository.findById(id);

    if (!book) throw new NotFoundException("Livro não encontrado");

    return book;
  }
}
