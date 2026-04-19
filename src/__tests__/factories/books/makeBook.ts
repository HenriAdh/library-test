import { faker } from "@faker-js/faker";

interface BookPayload {
  title: string;
  author: string;
}

export function makeBookPayload(
  overrides: Partial<BookPayload> = {},
): BookPayload {
  return {
    title: faker.book.title(),
    author: faker.person.fullName(),
    ...overrides,
  };
}
