import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Task Manager App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    height: '30',
  },
  text: {
    fontFamily: 'Arial', // Change to your desired system font
    fontSize: 20, // Optional: Adjust font size
    fontWeight: 'normal', // Optional: Adjust font weight
    fontStyle: 'italic', // Optional: Apply italic style
  },
});