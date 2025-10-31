import React from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { View } from "react-native";
import { Checkbox } from "../../../UI/inputs/checkbox";
import { ErrorMessage } from "../error-message";
import { styles } from "./styles";

interface CheckboxProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
}

export function CheckboxField<T extends FieldValues>({
  name,
  label,
}: CheckboxProps<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <View style={styles.container}>
          <Checkbox
            selected={value}
            label={label}
            hasError={!!error}
            onChange={onChange}
          />
          <ErrorMessage error={error} />
        </View>
      )}
    />
  );
}
