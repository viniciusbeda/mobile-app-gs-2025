import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { createEvent } from '../services/eventService';

const CreateScreen = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleCreate = async () => {
    if (!titulo || !descricao) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    const sucesso = await createEvent({ titulo, descricao });
    if (sucesso) {
      Alert.alert('Sucesso', 'Evento criado com sucesso!');
      setTitulo('');
      setDescricao('');
    } else {
      Alert.alert('Erro', 'Não foi possível criar o evento.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Digite o título"
      />
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Digite a descrição"
      />
      <Button title="Criar Evento" onPress={handleCreate} />
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
    borderColor: '#999',
    borderRadius: 6,
    padding: 10,
    marginTop: 4,
  },
});

export default CreateScreen;
