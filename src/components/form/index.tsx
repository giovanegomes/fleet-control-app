import React, { PropsWithChildren } from "react";
import { FormProvider, FieldValues } from "react-hook-form";
import { TextInputField } from "./components/inputs/text-input";
import { SelectField } from "./components/inputs/select";
import { CheckboxField } from "./components/inputs/checkbox";
import { DatePickerField } from "./components/inputs/date-picker";

export function Form<T extends FieldValues>({
  children,
  form,
}: PropsWithChildren<T>) {
  return <FormProvider {...form}>{children}</FormProvider>;
}

Form.TextInput = TextInputField;
Form.Select = SelectField;
Form.Checkbox = CheckboxField;
Form.DatePicker = DatePickerField;