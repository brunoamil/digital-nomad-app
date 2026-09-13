import { Box } from "@/src/components/Box";
import { Text } from "@/src/components/Text";
import { useAppTheme } from "@/src/theme/useAppTheme";

export default function HomeScreen() {
  const { colors } = useAppTheme();

  return (
    <Box flex={1} backgroundColor="midnightBlack">
      <Text mt="s10" color="text">
        HomeScreen {colors.midnightBlack}
      </Text>
    </Box>
  );
}
