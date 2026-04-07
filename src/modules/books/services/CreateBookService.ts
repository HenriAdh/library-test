import { BadRequestException } from "@/shared/utils/Exceptions";
import { CreateBookData } from "../dtos/createBookDTO";
import { IBookRepository } from "../repositories/IBookRepository";

export class CreateBookService {
  constructor(private bookRepository: IBookRepository) {}

  async execute({ author, title }: CreateBookData) {
    if (!author || !title) {
      throw new BadRequestException(
        "Nem todos os campos foram preenchidos corretamente",
      );
    }

    const created = await this.bookRepository.create({ author, title });

    return created;
  }
}
