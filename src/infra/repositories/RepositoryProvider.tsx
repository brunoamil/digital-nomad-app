import { Repositories } from "@/src/domain/Repositories";

import React from "react";

export const RepositoryContext = React.createContext({} as Repositories);

export const RepositoryProvider = RepositoryContext.Provider;

export function useRepository(): Repositories {
  const context = React.useContext(RepositoryContext);

  if (context === undefined) {
    throw new Error("useRepository must be used within a RepositoryProvider");
  }

  return context;
}
