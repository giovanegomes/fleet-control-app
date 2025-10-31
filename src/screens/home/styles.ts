import {  StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: 20,
    gap: 20
  },
});

export const actionButtonStyles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: 'gray',
    width: '40%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  }
});

export default styles;
