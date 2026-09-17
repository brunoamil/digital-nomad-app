import { Repositories } from "@/src/domain/Repositories";
import { InMemoryCityRepo } from "./inMemoryCityRepo";

export const InMemoryRepository: Repositories = {
  city: new InMemoryCityRepo(),
};
