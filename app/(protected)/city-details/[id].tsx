import { Divider } from "@/src/components/Divider";
import { Screen } from "@/src/components/Screen";
import { Text } from "@/src/components/Text";
import { CityDetailInfo } from "@/src/containers/CityDetailInfo";
import { CityDetailsHeader } from "@/src/containers/CityDetailsHeader";
import { CityDetailsMap } from "@/src/containers/CityDetailsMap";
import { CityDetailsRelatedCities } from "@/src/containers/CityDetailsRelatedCities";
import { CityDetailsTouristAttactions } from "@/src/containers/CityDetailsTouristAttactions";
import { useCityDetails } from "@/src/data/useCitiesDetails";
import { useLocalSearchParams } from "expo-router";

export default function CityDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const city = useCityDetails(id);

  if (!city) {
    return (
      <Screen>
        <Text>City not found</Text>
      </Screen>
    );
  }

  return (
    <Screen style={{ paddingHorizontal: 0 }} scrollable>
      <CityDetailsHeader
        id={city?.id}
        coverImage={city?.coverImage}
        categories={city?.categories}
      />
      <CityDetailInfo
        name={city?.name}
        country={city?.country}
        description={city?.description}
      />
      <Divider paddingHorizontal="padding" />
      <CityDetailsTouristAttactions
        touristAttractions={city.touristAttractions}
      />
      <Divider paddingHorizontal="padding" />
      <CityDetailsMap />
      <Divider paddingHorizontal="padding" />
      <CityDetailsRelatedCities />
    </Screen>
  );
}
