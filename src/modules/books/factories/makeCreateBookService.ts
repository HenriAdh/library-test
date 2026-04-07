import { BookRepository } from "../repositories/implementations/BookRepository";
import { CreateBookService } from "../services/CreateBookService";

export function makeCreateBookService() {
  const repository = new BookRepository();

  return new CreateBookService(repository);
}
