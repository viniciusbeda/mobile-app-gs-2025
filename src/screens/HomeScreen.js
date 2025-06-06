import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { getAllEvents } from '../services/eventService';
import EventoCard from '../components/EventoCard';
import Loading from '../components/Loading';

const HomeScreen = () => {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarEventos = async () => {
      const data = await getAllEvents();
      setEventos(data);
      setLoading(false);
    };

    carregarEventos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Eventos Cadastrados</Text>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView>
          {eventos.map((evento) => (
            <EventoCard key={evento.id} evento={evento} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F2F2F2',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomeScreen;
