import {
  TextInput as PaperTextInput,
  TextInputProps as PaperTextInputProps
} from "react-native-paper";
import { styles } from "./styles";

export function TextInput({
  hasError = false,
  ...props
}: TextInputProps) {
  return (
    <PaperTextInput
      {...props}
      mode="outlined"
      error={hasError}
      style={styles.input}
      outlineStyle={styles.outline}
    />
  );
}

interface TextInputProps extends Omit<PaperTextInputProps, 'mode'> {
  hasError?: boolean;
}
