import { StyleSheet } from "react-native";

export const commonInputStyles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: '#006bb3ff',
    marginBottom: 8,
    fontWeight: '500',
  },
  inputWrapper: {
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    backgroundColor: '#FAFAFA',
  },
  input: {
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#000',
  },
  inputFocused: {
    borderColor: '#006bb3ff',
    backgroundColor: '#F5F3FF',
  },
  inputError: {
    borderColor: '#D32F2F',
    backgroundColor: '#FFEBEE',
  },
});