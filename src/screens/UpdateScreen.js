import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { updateEvent } from '../services/eventService';

const UpdateScreen = ({ route }) => {
  const { evento } = route.params;

  const [titulo, setTitulo] = useState(evento.titulo);
  const [descricao, setDescricao] = useState(evento.descricao);

  const handleUpdate = async () => {
    if (!titulo || !descricao) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    const sucesso = await updateEvent(evento.id, { titulo, descricao });
    if (sucesso) {
      Alert.alert('Sucesso', 'Evento atualizado!');
    } else {
      Alert.alert('Erro', 'Não foi possível atualizar.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput style={styles.input} value={titulo} onChangeText={setTitulo} />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
      />

      <Button title="Atualizar Evento" onPress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 6,
    marginBottom: 8,
  },
});

export default UpdateScreen;
