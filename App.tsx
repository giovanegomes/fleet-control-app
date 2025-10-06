import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Router } from './src/routes';

export default function App() {
  return (
    <View style={styles.container}>
      <Router />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
