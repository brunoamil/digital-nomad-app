import { CityCard } from "@/src/components/CityCard";
import { Icon } from "@/src/components/Icon";
import { Screen } from "@/src/components/Screen";
import { cityPreviewList } from "@/src/data/cities";
import { CityPreview } from "@/src/types";
import { FlatList, ListRenderItemInfo } from "react-native";

export default function HomeScreen() {
  // const { colors } = useAppTheme();

  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return <CityCard cityPreview={item} />;
  }
  return (
    <Screen>
      <Icon name="Adventure" color="primary" />
      <Icon name="Beach" color="primary" />
      <FlatList data={cityPreviewList} renderItem={renderItem} />
    </Screen>
  );
}
