import { BadRequestException } from "@/shared/utils/Exceptions";
import { CreateBookData } from "../dtos/createBookDTO";
import { IBookRepository } from "../repositories/IBookRepository";

export class CreateBookService {
  constructor(private bookRepository: IBookRepository) {}

  async execute({ author, title }: CreateBookData) {
    if (!author) {
      throw new BadRequestException(
        'Campo "Autor" não preenchido corretamente',
      );
    }

    if (!title) {
      throw new BadRequestException(
        'Campo "Titulo" não preenchido corretamente',
      );
    }

    const created = await this.bookRepository.create({ author, title });

    return created;
  }
}
