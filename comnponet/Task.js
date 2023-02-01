import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = props => {
  return (
    <View style={styles.item}>
      <View style={styles.itemleft}>
        <TouchableOpacity style={styles.square} />
        <Text style={styles.itemText}> {props.text}</Text>
      </View>
      <View style={styles.circular} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    elevation: 6,
  },
  itemleft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 27,
    height: 27,
    backgroundColor: '#1F618D',
    opacity: 0.8,
    borderRadius: 15,
    margineRight: 15,
    elevation: 6,
  },
  itemText: {
    color: 'black',
    fontSize: 16,
    marginStart: 3,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#3498DB',
    borderWidth: 2,
    borderRadius: 5,
    marginEnd: 5,
  },
});

export default Task;
