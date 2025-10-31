import { FieldError } from "react-hook-form";
import { StyleSheet } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { styles } from "./styles";

export function ErrorMessage({ error }: { error?: FieldError }) {
  const theme = useTheme();

  if (!error) return null;

  return (
    <Text 
      variant="bodySmall" 
      style={[styles.errorText, { color: theme.colors.error }]}
    >
      {error.message}
    </Text>
  );
}
