import { Category, CategoryCode, CityPreview } from "../types";
import { supabase } from "./supabase";

const storageURL = process.env.EXPO_PUBLIC_SUPABASE_STORAGE_URL;

export type CityFilter = {
  name?: string;
  categoryId?: string | null;
};

async function findAll(filters: CityFilter): Promise<CityPreview[]> {
  try {
    const fields = "id,name,country,cover_image";
    let cities;
    if (filters.categoryId) {
      const { data } = await supabase
        .from("cities_with_categories")
        .select(fields)
        .eq("category_id", filters.categoryId)
        .ilike("name", `%${filters.name}%`);

      cities = data;
    } else {
      const { data } = await supabase
        .from("cities")
        .select(fields)
        .ilike("name", `%${filters.name}%`);

      cities = data;
    }

    if (!cities) {
      throw new Error("data is not available");
    }
    return cities?.map(
      (row) =>
        ({
          id: row.id,
          name: row.name,
          country: row.country,
          coverImage: `${storageURL}/${row.cover_image}`,
        }) as CityPreview,
    );
  } catch (error) {
    throw error;
  }
}

async function listCategory(): Promise<Category[]> {
  const { data, error } = await supabase.from("categories").select("*");

  if (error) {
    throw new Error("Error listing categories");
  }
  return data.map((row) => ({
    id: row.id,
    name: row.name,
    code: row.code as CategoryCode,
    description: row.description,
  }));
}

export const supabaseService = {
  findAll,
  listCategory,
};
