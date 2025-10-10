import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

export function TextInputField<T extends FieldValues>({
  name,
  label,
  placeholder,
  secureTextEntry,
}: {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
}) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View>
          {label && <Text>{label}</Text>}
          <TextInput
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            value={value != null ? String(value) : ""}
            onChangeText={onChange}
          />
          {error && <Text>{error.message}</Text>}
        </View>
      )}
    />
  );
}