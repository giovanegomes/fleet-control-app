import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { View } from "react-native";
import { TextInput } from "../../../UI/inputs/text-input";
import { ErrorMessage } from "../error-message";
import { styles } from "./styles";

interface TextInputFieldProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
}

export function TextInputField<T extends FieldValues>({
  name,
  label,
  placeholder,
  secureTextEntry,
}: TextInputFieldProps<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
        <View style={styles.container}>
          <TextInput
            label={label}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            value={value != null ? String(value) : ""}
            onChangeText={onChange}
            onBlur={onBlur}
            hasError={!!error}
          />
          <ErrorMessage error={error} />
        </View>
      )}
    />
  );
}
