import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Router } from './src/routes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PaperProvider>
        <StatusBar style="auto" />
        <Router />
      </PaperProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
