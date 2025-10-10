import React, { PropsWithChildren } from "react";
import { FormProvider, FieldValues } from "react-hook-form";
import { TextInputField } from "./inputs/text-input";

export function Form<T extends FieldValues>({
  children,
  form,
}: PropsWithChildren<T>) {
  return <FormProvider {...form}>{children}</FormProvider>;
}

Form.TextInput = TextInputField;