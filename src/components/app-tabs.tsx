import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function AppTabs() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={styles.container}>

      {/* HOME */}
      <Pressable
        style={styles.tab}
        onPress={() => router.push('/')}
      >
        <Ionicons
          name={pathname === '/' ? 'home' : 'home-outline'}
          size={25}
          color={pathname === '/' ? '#222' : '#999'}
        />

        <Text
          style={[
            styles.label,
            pathname === '/' && styles.activeLabel,
          ]}
        >
          Home
        </Text>
      </Pressable>

      {/* BOTÃO CENTRAL */}
      <Pressable
        style={styles.plusButton}
        onPress={() => router.push('/create')}
      >
        <Ionicons
          name="add"
          size={32}
          color="#FFFFFF"
        />
      </Pressable>

      {/* CURTIDAS */}
      <Pressable
        style={styles.tab}
        onPress={() => router.push('/explore')}
      >
        <Ionicons
          name={
            pathname === '/explore'
              ? 'heart'
              : 'heart-outline'
          }
          size={25}
          color={pathname === '/explore' ? '#222' : '#999'}
        />

        <Text
          style={[
            styles.label,
            pathname === '/explore' && styles.activeLabel,
          ]}
        >
          Curtidas
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    paddingHorizontal: 35,
  },

  tab: {
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },

  activeLabel: {
    color: '#222',
    fontWeight: '600',
  },

  plusButton: {
    width: 58,
    height: 58,
    borderRadius: 29,

    backgroundColor: '#222',

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: -25,

    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});