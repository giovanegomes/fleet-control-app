import React, { useState } from "react";
import { Menu, TextInput, useTheme } from "react-native-paper";
import { styles } from "./styles";
import { View, TouchableWithoutFeedback } from "react-native";

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
  const selectedOption = options.find(option => option.value === selected);
  const displayValue = selectedOption?.label || "";

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleSelect = (value: string) => {
    onChange(value);
    closeMenu();
  };

  return (
    <View key={`select-${selected || 'empty'}`}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        contentStyle={styles.menuContent}
        anchor={
          <TouchableWithoutFeedback onPress={openMenu}>
            <View>
              <TextInput          
                label={label}
                placeholder={placeholder}
                value={displayValue}
                error={hasError}
                mode="outlined"
                editable={false}
                right={<TextInput.Icon icon="chevron-down" onPress={openMenu} />}
                style={styles.input}
                outlineStyle={styles.outline}
              />
            </View>
          </TouchableWithoutFeedback>
        }
      >
        {options.map((option) => (
          <Menu.Item
            key={option.value}
            onPress={() => handleSelect(option.value)}
            title={option.label}
            titleStyle={selected === option.value && { 
              color: theme.colors.primary,
              fontWeight: '600'
            }}
          />
        ))}
      </Menu>
    </View>
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
