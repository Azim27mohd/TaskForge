import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const currentDate = new Date().toDateString();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: <Text style={styles.boldText}>Azim Mohammed</Text></Text>
      <Text style={styles.text}>App Name: <Text style={styles.boldText}>TaskForge</Text></Text>
      <Text style={styles.text}>Current Date: <Text style={styles.boldText}>{currentDate}</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: '#fff',
    fontFamily: 'Arial', // Use your desired fancy font here
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
