import React, { useState } from "react";
import { Menu, TextInput, useTheme } from "react-native-paper";
import { styles } from "./styles";

type Option = {
  label: string;
  value: string;
};

export function Select({
  label,
  selected,
  options,
  placeholder,
  hasError = false,
  onChange,
}: SelectProps) {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const selectedOption = options.find(opt => opt.value === selected);
  const displayValue = selectedOption?.label || "";

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <TextInput
          label={label}
          placeholder={placeholder}
          value={displayValue}
          onFocus={openMenu}
          error={hasError}
          mode="outlined"
          editable={false}
          right={<TextInput.Icon icon="chevron-down" onPress={openMenu} />}
          style={styles.input}
          outlineStyle={styles.outline}
        />
      }
      contentStyle={styles.menuContent}
    >
      {options.map((option) => (
        <Menu.Item
          key={option.value}
          onPress={() => {
            onChange(option.value);
            closeMenu();
          }}
          title={option.label}
          titleStyle={selected === option.value && { 
            color: theme.colors.primary,
            fontWeight: '600'
          }}
        />
      ))}
    </Menu>
  );
}

interface SelectProps {
  selected?: string;
  options: Option[];
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  hasError?: boolean;
}

