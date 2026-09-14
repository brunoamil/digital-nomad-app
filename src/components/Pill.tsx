import { Box } from "./Box";
import { Icon, IconName } from "./Icon";
import { Text } from "./Text";

export type PillProps = {
  label: string;
  iconName: IconName;
  active: boolean;
};
export function Pill({ iconName, label, active }: PillProps) {
  return (
    <Box>
      <Icon name={iconName} color={active ? "primary" : "gray2"} />
      <Text>{label}</Text>
    </Box>
  );
}
