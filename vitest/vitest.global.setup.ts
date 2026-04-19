import { fakeSeeds } from "../prisma/seeds/tests";

export async function setup() {
  await fakeSeeds();
}

export async function teardown() {}
