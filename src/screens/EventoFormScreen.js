// src/screens/EventoFormScreen.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import eventService from '../services/eventService';

export default function EventoFormScreen({ route, navigation }) {
  const eventoEditado = route.params?.evento;
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    if (eventoEditado) {
      setNome(eventoEditado.nome);
      setDescricao(eventoEditado.descricao);
    }
  }, [eventoEditado]);

  const salvar = async () => {
    if (!nome || !descricao) {
      Alert.alert('Campos obrigatórios', 'Preencha todos os campos');
      return;
    }

    try {
      if (eventoEditado) {
        await eventService.updateEvento(eventoEditado.id, { nome, descricao });
      } else {
        await eventService.createEvento({ nome, descricao });
      }
      navigation.goBack();
    } catch (_error) {
      Alert.alert('Erro', 'Não foi possível salvar o evento');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome do Evento"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Descrição"
        style={[styles.input, styles.textArea]}
        value={descricao}
        onChangeText={setDescricao}
        multiline
        numberOfLines={4}
      />
      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    marginBottom: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});
