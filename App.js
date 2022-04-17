import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        <Text style={styles.mainTitle}>KONEKONE</Text>
        <StatusBar style="auto" />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: "Proxima Nova"
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: "bold"
  },
});
