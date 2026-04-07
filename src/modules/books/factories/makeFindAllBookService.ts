import { BookRepository } from "../repositories/implementations/BookRepository";
import { FindAllBookService } from "../services/FindAllBookService";

export function makeFindAllBookService() {
  const repository = new BookRepository();

  return new FindAllBookService(repository);
}
