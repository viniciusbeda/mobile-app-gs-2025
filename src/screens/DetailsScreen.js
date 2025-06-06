import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { evento } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{evento.titulo}</Text>
      <Text style={styles.description}>{evento.descricao}</Text>
      <Text style={styles.info}>Data: {evento.data}</Text>
      <Text style={styles.info}>Local: {evento.local}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 12,
  },
  info: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },
});

export default DetailsScreen;
