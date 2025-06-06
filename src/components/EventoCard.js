import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function EventoCard({ evento, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.titulo}>{evento.titulo}</Text>
      <Text style={styles.data}>{evento.data}</Text>
      <Text style={styles.local}>{evento.local}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  data: {
    fontSize: 14,
    color: '#555',
  },
  local: {
    fontSize: 14,
    color: '#777',
  },
});
