import { TouchableOpacity } from "react-native";
import { Text, Checkbox as PaperCheckbox, useTheme } from "react-native-paper";
import { styles } from "./styles";

export function Checkbox({
  label,
  selected = false,
  hasError = false,
  onChange,
}: Props) {
  const theme = useTheme();
  const checkboxColor = hasError ? theme.colors.error : theme.colors.primary;

  return (
    <TouchableOpacity
      onPress={() => onChange(!selected)}
      style={styles.container}
      activeOpacity={0.7}
    >
      <PaperCheckbox
        status={selected ? "checked" : "unchecked"}
        onPress={() => onChange(!selected)}
        color={checkboxColor}
        uncheckedColor={hasError ? theme.colors.error : undefined}
      />
      {label && (
        <Text 
          variant="bodyLarge"
          style={[styles.label, hasError && { color: theme.colors.error }]}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}

interface Props {
  label?: string;
  selected?: boolean;
  hasError?: boolean;
  onChange: (value: boolean) => void;
}

