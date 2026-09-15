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
    <Screen style={{ paddingHorizontal: 0 }}>
      <CityDetailsHeader
        id={city?.id}
        coverImage={city?.coverImage}
        categories={city?.categories}
      />
      <CityDetailInfo />
      <CityDetailsTouristAttactions />
      <CityDetailsMap />
      <CityDetailsRelatedCities />
    </Screen>
  );
}
