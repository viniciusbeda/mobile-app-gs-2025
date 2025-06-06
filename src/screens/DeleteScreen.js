import React from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import { deleteEvent } from '../services/eventService';

const DeleteScreen = ({ route, navigation }) => {
  const { eventoId } = route.params;

  const handleDelete = async () => {
    const sucesso = await deleteEvent(eventoId);
    if (sucesso) {
      Alert.alert('Sucesso', 'Evento excluído.');
      navigation.goBack();
    } else {
      Alert.alert('Erro', 'Não foi possível excluir.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Tem certeza que deseja excluir este evento?
      </Text>
      <Button title="Excluir" color="#e74c3c" onPress={handleDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default DeleteScreen;
