import { BookRepository } from "../repositories/implementations/BookRepository";
import { UpdateBookService } from "../services/UpdateBookService";

export function makeUpdateBookService() {
  const repository = new BookRepository();

  return new UpdateBookService(repository);
}
