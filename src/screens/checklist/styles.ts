import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 10,
  },
  warning: {
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#9c8001ff',
    backgroundColor: '#f3e4a1ff',
  },
  warningText: {
    textAlign: 'justify',
    fontSize: 16,
    color: '#9c8001ff',
  }
});

export default styles;
