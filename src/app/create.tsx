import { StyleSheet, Text, View } from 'react-native';

export default function CreateScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Criar Bark
      </Text>

      <Text style={styles.subtitle}>
        Digite uma palavra para gerar seu Bark.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#222',
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
  },
});