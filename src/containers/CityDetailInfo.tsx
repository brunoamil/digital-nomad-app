import { Box } from "../components/Box";
import { Text } from "../components/Text";
import { City } from "../types";

type CityDetailInfoProps = Pick<City, "name" | "country" | "description">;

export function CityDetailInfo({
  name,
  country,
  description,
}: CityDetailInfoProps) {
  return (
    <Box padding="padding">
      <Text variant="title22" mb="s2">
        {name}
      </Text>
      <Text variant="text18" mb="s24">
        {country}
      </Text>
      <Text variant="text16">{description}</Text>
    </Box>
  );
}
