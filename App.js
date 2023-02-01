/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ScrollView,
  ScrollViewBase,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Task from './comnponet/Task';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
export default function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask('');
    console.log(taskItems);
  };
  const completeTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.taskWrapper}>
          <Text style={styles.TodaysFnt}>Today's Task</Text>
          <Text style={{fontWeight: '700'}}>
            ___________________________________________
          </Text>
          <View style={styles.Item}>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      <View style={styles.LastView}>
        <TextInput
          style={styles.input}
          placeholder={'Write a Task'}
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.Addwrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9CCE3 ',
  },
  taskWrapper: {
    paddingTop: '10%',
    paddingHorizontal: '8%',
    backgroundColor: '#2980B9',
    borderBottomEndRadius: 45,
    borderBottomStartRadius: 45,
  },
  TodaysFnt: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#212F3C',
    // fontStyle:'Cochin',
  },
  Item: {
    marginTop: '30%',
  },
  // writeatask: {
  //   position: 'absolute',
  //   bottom: 60,
  //   width: '100',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  // },
  input: {
    paddingVertical: '2%',
    paddingHorizontal: '5%',
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: 'gray',
    borderWidth: 1,
    width: '75%',
    elevation: 6,
    height: '65%',
    marginTop: 10,
    marginStart: 15,
    marginEnd: 10,
  },
  Addwrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    elevation: 6,
    marginTop: 10,
  },
  addText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  LastView: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'stretch',
    flexDirection: 'row',
    //justifyContent: 'space-evenly',
    // marginBottom: 10,
    backgroundColor: '#1B4F72',
    height: 90,
    // eslint-disable-next-line no-dupe-keys
    alignItems: 'center',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
});
