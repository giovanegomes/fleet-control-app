import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { View } from "react-native";
import { DatePicker } from "../../../UI/inputs/date-picker";
import { ErrorMessage } from "../error-message";
import { styles } from "./styles";

interface DatePickerFieldProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  placeholder?: string;
}

export function DatePickerField<T extends FieldValues>({
  name,
  label,
  placeholder,
}: DatePickerFieldProps<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <View style={styles.container}>
          <DatePicker
            label={label}
            placeholder={placeholder}
            value={value}
            hasError={!!error}
            onChange={onChange}
          />
          <ErrorMessage error={error} />
        </View>
      )}
    />
  );
}
