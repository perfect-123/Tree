import { StyleSheet, Text, View } from 'react-native';
import { Link} from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Link href="/Checkpoint" style={{ color: 'blue'}}>CHECKPOINT</Link>
            <Link href="/vision" style= {{color: 'green'}}>VISIONS</Link>
        </View>
    )}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    fontSize: 24,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});