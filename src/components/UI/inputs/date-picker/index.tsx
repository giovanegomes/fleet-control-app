import { useState } from "react";
import { Platform, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { styles } from "./styles";

export function DatePicker({
  label,
  placeholder,
  value,
  hasError = false,
  onChange,
}: DatePickerProps) {
  const [show, setShow] = useState(false);

  const showPicker = () => setShow(true);
  const hidePicker = () => setShow(false);

  const formatDate = (date: Date | null | undefined) => {
    if (!date) return "";
    return date.toLocaleDateString("pt-BR");
  };

  return (
    <>
      <Pressable onPress={showPicker}>
        <TextInput
          label={label}
          placeholder={placeholder}
          value={formatDate(value)}
          error={hasError}
          mode="outlined"
          editable={false}
          right={<TextInput.Icon icon="calendar" onPress={showPicker} />}
          style={styles.input}
          outlineStyle={styles.outline}
          onPressIn={showPicker}
        />
      </Pressable>
      {show && (
        <DateTimePicker
          locale="pt-BR"
          value={value || new Date()}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={(event: DateTimePickerEvent, selectedDate?: Date) => {
            hidePicker();
            if (event.type === "set" && selectedDate) {
              onChange(selectedDate);
            }
          }}
        />
      )}
    </>
  );
}

interface DatePickerProps {
  label?: string;
  placeholder?: string;
  value?: Date | null;
  hasError?: boolean;
  onChange: (date: Date) => void;
}
