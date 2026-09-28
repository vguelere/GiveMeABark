import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';

export default function CreateButton() {
  const router = useRouter();

  return (
    <Pressable
      style={styles.button}
      onPress={() => router.push('/create')}
    >
      <Ionicons
        name="add"
        size={32}
        color="#FFFFFF"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 35,
    alignSelf: 'center',

    width: 60,
    height: 60,
    borderRadius: 30,

    backgroundColor: '#222222',

    alignItems: 'center',
    justifyContent: 'center',

    elevation: 8,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
});