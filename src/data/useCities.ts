import { useEffect, useState } from "react";
import { supabaseService } from "../supabase/supabaseService";
import { CityPreview } from "../types";

type CityFilter = {
  name?: string;
  categoryId?: string | null;
};

type UseCitiesReturn = {
  cities?: CityPreview[];
  isLoading: boolean;
  error: unknown;
};

export function useCities({ name, categoryId }: CityFilter): UseCitiesReturn {
  const [cities, setCities] = useState<CityPreview[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  async function fetchData() {
    try {
      setIsLoading(true);

      const data = await supabaseService.findAll();
      setCities(data);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log("cities", cities);
  return {
    cities,
    isLoading,
    error,
  };
}

// supabaseService.findAll();
//   let cityPreviewList = [...cities];

//   if (name) {
//     cityPreviewList = cityPreviewList.filter((city) => {
//       return city.name.toLowerCase().includes(name.toLowerCase());
//     });
//   }

//   if (categoryId) {
//     cityPreviewList = cityPreviewList.filter((city) => {
//       return city.categories.some((category) => category.id === categoryId);
//     });
//   }
