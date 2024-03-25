import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';
import { useState } from 'react';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleTask = () => {
    console.log(task);
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    if (taskItems.length > 0) {
      console.log(taskItems);
    }
    setTask();
  }

  const deleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Tareas de hoy!</Text>
        <View style={styles.itemsWrapper}>
          {/* Items here */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => { deleteTask(index) }}>
                  <Task taskText={item}  />
                </TouchableOpacity>
              )

            })
          }
        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder='Escribe una tarea' value={task} onChangeText={text => { setTask(text) }} />
        <TouchableOpacity onPress={() => { handleTask() }}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>
              +
            </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4E7EB',
  },
  taskWrapper: {
    paddingTop: 70,
    paddingHorizontal: 20
  },
  sectionTitle: {
    color: '#000',
    fontSize: 28,
    fontWeight: '700'
  },
  itemsWrapper: {

  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: 250,
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1
  },
  addWrapper: {
    height: 60,
    width: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1
  },
  addText: {},
});
