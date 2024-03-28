import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Platform, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import Task from './components/Task';
import ProfileScreen from './ProfileScreen';

export default function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const [showProfile, setShowProfile] = useState(false);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      setTask('');
    }
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <LinearGradient colors={['#F8B500', '#FD7400']} style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>To-Do List</Text>
          <View style={styles.items}>
            {taskItems.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <Animated.View style={[styles.addWrapper]}>
            <Text style={styles.addText}>+</Text>
          </Animated.View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      {showProfile && <ProfileScreen />}
      <TouchableOpacity onPress={() => setShowProfile(!showProfile)} style={styles.profileButton}>
        <Text style={styles.profileButtonText}>Profile</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  tasksWrapper: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    marginRight: 10,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addText: {
    fontSize: 24,
    color: '#000',
  },
  profileButton: {
    position: 'absolute',
    bottom: 722,
    right: 20,
    backgroundColor: '#FD7400',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  profileButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
