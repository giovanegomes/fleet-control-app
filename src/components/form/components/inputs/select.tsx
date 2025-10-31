import React from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { Select } from '../../../UI/inputs/select';
import { View, StyleSheet } from "react-native";
import { ErrorMessage } from "../error-message";
import { styles } from "./styles";

type Option = {
  label: string;
  value: string;
};

interface SelectProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  options: Option[];
  placeholder?: string;
}

export function SelectField<T extends FieldValues>({
  name,
  label,
  options,
  placeholder,
}: SelectProps<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
        <View style={styles.container}>
          <Select
            label={label}
            selected={value}
            options={options}
            placeholder={placeholder}
            onChange={onChange}
            hasError={!!error}
          />
          <ErrorMessage error={error} />
        </View>
      )}
    />
  );
}
