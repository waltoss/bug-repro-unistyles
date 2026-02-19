import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';

export default function App() {
  const toggleTheme = () => {
    const currentTheme = UnistylesRuntime.themeName;
    UnistylesRuntime.setTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <View style={styles.container}>
      <View style={styles.coachInfo}>
        <Text style={styles.name}>Coach Name</Text>
        <Text style={styles.role}>Senior Coach</Text>
      </View>
      <Pressable onPress={toggleTheme} style={styles.button}>
        <Text style={styles.buttonText}>Toggle Theme</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create(({ sizes, colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coachInfo: {
    flex: 1,
    gap: sizes['size-050'],
    width: 'fit-content', // CSS-only keyword — crashes on iOS when theme changes
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  role: {
    fontSize: 14,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    padding: sizes['size-200'],
    borderRadius: 8,
    marginBottom: 60,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
}));
