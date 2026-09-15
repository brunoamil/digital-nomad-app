import { useEffect, useState } from "react";
import { CityFilter, supabaseService } from "../supabase/supabaseService";
import { CityPreview } from "../types";

type UseCitiesReturn = {
  cities?: CityPreview[];
  isLoading: boolean;
  error: unknown;
};

export function useCities(filters: CityFilter): UseCitiesReturn {
  const [cities, setCities] = useState<CityPreview[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  async function fetchData() {
    try {
      setIsLoading(true);

      const data = await supabaseService.findAll(filters);
      setCities(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.name, filters.categoryId]);

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
