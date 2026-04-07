import { BookRepository } from "../repositories/implementations/BookRepository";
import { FindBookByIdService } from "../services/FindBookByIdService";

export function makeFindBookByIdService() {
  const repository = new BookRepository();

  return new FindBookByIdService(repository);
}
