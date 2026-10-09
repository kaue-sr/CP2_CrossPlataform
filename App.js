import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState([]);

  function adicionarItem() {
    if (item.trim() === '') return;

    const novoItem = { id: Date.now().toString(), nome: item.trim() };

    // Sem .push(): cria um novo array com o spread operator
    setLista([...lista, novoItem]);
    setItem('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite um novo item"
        value={item}
        onChangeText={setItem}
      />

      <Button title="Adicionar" onPress={adicionarItem} />

      <FlatList
        style={styles.lista}
        data={lista}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTexto}>{item.nome}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  lista: {
    marginTop: 20,
  },
  itemContainer: {
    padding: 14,
    marginBottom: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  itemTexto: {
    fontSize: 16,
  },
});