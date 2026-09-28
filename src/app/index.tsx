import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Bark = {
  id: number;
  nome: string;
  username: string;
  avatar: string;
  frase: string;
  curtidas: number;
  data: string;
  tag: string;
};

const barks: Bark[] = [
  {
    id: 1,
    nome: 'Fernanda',
    username: '@ferzinha',
    avatar: 'F',
    frase:
      'Às vezes, o que a gente precisa não é de mais tempo, mas de menos pessoas.',
    curtidas: 412,
    data: '24/09/2026 às 19:12',
    tag: 'vida',
  },

  {
    id: 2,
    nome: 'Rafael',
    username: '@rafael',
    avatar: 'R',
    frase:
      'O cachorro corre atrás do vento, sem saber onde vai chegar, mas feliz por estar correndo.',
    curtidas: 298,
    data: '24/09/2026 às 18:40',
    tag: 'cachorro',
  },

  {
    id: 3,
    nome: 'Mariana',
    username: '@marianal',
    avatar: 'M',
    frase:
      'A lua observa tudo em silêncio, iluminando os caminhos de quem ainda procura seu destino.',
    curtidas: 231,
    data: '24/09/2026 às 21:24',
    tag: 'lua',
  },

  {
    id: 4,
    nome: 'João',
    username: '@joaofer',
    avatar: 'J',
    frase:
      'Pequena abelha, grande viajante, dança entre as flores e carrega o segredo da primavera.',
    curtidas: 184,
    data: '24/09/2026 às 14:12',
    tag: 'abelha',
  },

  {
    id: 5,
    nome: 'Camila',
    username: '@camila',
    avatar: 'C',
    frase:
      'O mar guarda histórias que ninguém contou e leva para longe aquilo que ninguém conseguiu dizer.',
    curtidas: 156,
    data: '24/09/2026 às 11:03',
    tag: 'mar',
  },
];

export default function HomeScreen() {
  const [curtidos, setCurtidos] = useState<number[]>([]);

  function curtirBark(id: number) {
    setCurtidos((estadoAtual) => {
      if (estadoAtual.includes(id)) {
        return estadoAtual.filter((item) => item !== id);
      }

      return [...estadoAtual, id];
    });
  }

  function renderBark({ item }: { item: Bark }) {
    const curtido = curtidos.includes(item.id);

    return (
      <View style={styles.bark}>

        {/* CABEÇALHO */}
        <View style={styles.header}>

          <View style={styles.userInfo}>

            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {item.avatar}
              </Text>
            </View>

            <View>
              <Text style={styles.name}>
                {item.nome}
              </Text>

              <Text style={styles.username}>
                {item.username}
              </Text>
            </View>

          </View>

          <Pressable>
            <Ionicons
              name="ellipsis-horizontal"
              size={20}
              color="#777"
            />
          </Pressable>

        </View>


        {/* TEXTO */}
        <Text style={styles.quote}>
          "{item.frase}"
        </Text>


        {/* RODAPÉ */}
        <View style={styles.footer}>

          <View>
            <Text style={styles.date}>
              {item.data}
            </Text>
          </View>

          <View style={styles.footerRight}>

            <View style={styles.tag}>
              <Text style={styles.tagText}>
                {item.tag}
              </Text>
            </View>

            <Pressable
              style={styles.like}
              onPress={() => curtirBark(item.id)}
            >
              <Ionicons
                name={curtido ? 'heart' : 'heart-outline'}
                size={19}
                color={curtido ? '#E91E63' : '#777'}
              />

              <Text
                style={[
                  styles.likeCount,
                  curtido && styles.likedCount,
                ]}
              >
                {item.curtidas + (curtido ? 1 : 0)}
              </Text>
            </Pressable>

          </View>

        </View>

      </View>
    );
  }

  return (
    <View style={styles.container}>

      {/* TOPO */}
      <View style={styles.topBar}>
        <Text style={styles.logo}>
          GiveMeABark
        </Text>

        <Pressable>
          <Ionicons
            name="notifications-outline"
            size={25}
            color="#222"
          />
        </Pressable>
      </View>


      {/* FEED */}
      <FlatList
        data={barks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderBark}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.feed}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8EE',
  },

  topBar: {
    height: 70,
    backgroundColor: '#FFFFFF',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 20,

    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  logo: {
    fontSize: 24,
    fontWeight: '800',
    color: '#222',
  },

  feed: {
    paddingTop: 8,
    paddingBottom: 20,
  },

  bark: {
    backgroundColor: '#FFFFFF',

    paddingHorizontal: 16,
    paddingVertical: 15,

    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,

    backgroundColor: '#E8E8E8',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 10,
  },

  avatarText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#555',
  },

  name: {
    fontSize: 15,
    fontWeight: '700',
    color: '#222',
  },

  username: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },

  quote: {
    fontSize: 16,
    lineHeight: 23,
    color: '#333',

    marginTop: 12,
    marginBottom: 12,
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  date: {
    fontSize: 11,
    color: '#AAA',
  },

  footerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  tag: {
    backgroundColor: '#F1F1F1',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    marginRight: 12,
  },

  tagText: {
    fontSize: 11,
    color: '#777',
  },

  like: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  likeCount: {
    fontSize: 13,
    color: '#777',
    marginLeft: 4,
  },

  likedCount: {
    color: '#E91E63',
    fontWeight: '600',
  },
});