import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const barks: { [key: string]: string } = {
  abelha:
    'Pequena abelha, grande viajante, dança entre as flores e carrega o segredo da primavera.',

  cachorro:
    'O cachorro corre atrás do vento, sem saber onde vai chegar, mas feliz por estar correndo.',

  lua:
    'A lua observa tudo em silêncio, iluminando os caminhos de quem ainda procura seu destino.',

  mar:
    'O mar guarda histórias que ninguém contou e leva para longe aquilo que ninguém conseguiu dizer.',
};

export default function HomeScreen() {
  const [palavra, setPalavra] = useState('');
  const [bark, setBark] = useState('');

  // Histórico dos Barks curtidos
  const [historico, setHistorico] = useState<
  {
    frase: string;
    data: string;
    hora: string;
  }[]
>([]);

  function gerarBark() {
    const palavraBusca = palavra.toLowerCase().trim();

    if (barks[palavraBusca]) {
      setBark(barks[palavraBusca]);
    } else {
      setBark(
        `🐶 Ainda não tenho um Bark para "${palavra}".`
      );
    }
  }

function curtirBark() {
  if (bark === '') {
    return;
  }

  const agora = new Date();

  const novoBark = {
    frase: bark,
    data: agora.toLocaleDateString('pt-BR'),
    hora: agora.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    }),
  };

  setHistorico([...historico, novoBark]);

  setBark('');
}

  function descartarBark() {
    setBark('');
  }

  return (
    <View style={styles.container}>

      <Text style={styles.logo}></Text>

      <Text style={styles.title}>
        GiveMeABark
      </Text>

      <Text style={styles.subtitle}>
        Digite uma palavra e receba um Bark.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: abelha"
        placeholderTextColor="#999"
        value={palavra}
        onChangeText={setPalavra}
      />

      <Pressable
        style={styles.button}
        onPress={gerarBark}
      >
        <Text style={styles.buttonText}>
          BARK!
        </Text>
      </Pressable>

      {bark !== '' && (
        <View style={styles.barkBox}>

          <Text style={styles.barkTitle}>
            🐶 Seu Bark
          </Text>

          <Text style={styles.barkText}>
            "{bark}"
          </Text>

          <View style={styles.actions}>

            <Pressable
              style={styles.likeButton}
              onPress={curtirBark}
            >
              <Text style={styles.actionText}>
                ❤️ Curtir
              </Text>
            </Pressable>

            <Pressable
              style={styles.discardButton}
              onPress={descartarBark}
            >
              <Text style={styles.actionText}>
                ❌
              </Text>
            </Pressable>

          </View>

        </View>
      )}

      {historico.length > 0 && (
        <View style={styles.history}>

          <Text style={styles.historyTitle}>
            ❤️ Meu histórico
          </Text>

          {historico.map((item, index) => (
            <View
              key={index}
              style={styles.historyItem}
            >
              <Text style={styles.historyText}>
                "{item.frase}"
              </Text>

              <Text style={styles.historyDate}>
                {item.data} às {item.hora}
              </Text>
            </View>
          ))}

        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF8EE',
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 25,
  },

  logo: {
    fontSize: 60,
    marginBottom: 5,
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#222',
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    marginBottom: 30,
    textAlign: 'center',
  },

  input: {
    width: '100%',
    height: 55,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingHorizontal: 20,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#DDD',
  },

  button: {
    width: '100%',
    height: 55,
    backgroundColor: '#222',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  barkBox: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 25,
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },

  barkTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  barkText: {
    fontSize: 21,
    lineHeight: 32,
    color: '#333',
  },

  actions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 25,
  },

  likeButton: {
    flex: 1,
    height: 50,
    backgroundColor: '#222',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  discardButton: {
    width: 55,
    height: 50,
    backgroundColor: '#EEEEEE',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  actionText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  history: {
    width: '100%',
    marginTop: 30,
  },

  historyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  historyItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 8,
  },

  historyText: {
    fontSize: 16,
    color: '#333',
  },

historyDate: {
  fontSize: 12,
  color: '#999',
  marginTop: 8,
},

});