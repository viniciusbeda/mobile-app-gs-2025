// src/screens/EventoListScreen.js
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import eventService from '../services/eventService';

export default function EventoListScreen({ navigation }) {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarEventos = async () => {
    try {
      const dados = await eventService.getEventos();
      setEventos(dados);
    } catch (_error) {
      Alert.alert('Erro', 'Não foi possível carregar os eventos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', carregarEventos);
    return unsubscribe;
  }, [navigation]);

  const excluirEvento = async (id) => {
    try {
      await eventService.deleteEvento(id);
      carregarEventos();
    } catch (_error) {
      Alert.alert('Erro', 'Não foi possível excluir o evento');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.evento}>
      <Text style={styles.titulo}>{item.nome}</Text>
      <Text>{item.descricao}</Text>
      <View style={styles.botoes}>
        <Button
          title="Editar"
          onPress={() => navigation.navigate('Editar Evento', { evento: item })}
        />
        <Button
          title="Excluir"
          color="red"
          onPress={() => excluirEvento(item.id)}
        />
      </View>
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.vazio}>Nenhum evento encontrado</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  evento: {
    padding: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginBottom: 12,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  vazio: {
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
  },
});
