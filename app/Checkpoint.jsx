import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Checkpoint = () => {
  const [checked, setChecked] = useState(Array(6).fill(false)); // Track checkbox states
  const colors = [
    "#FFB3BA", // Color for Checkpoint 1
    "#FFDFBA", // Color for Checkpoint 2
    "#FFFFBA", // Color for Checkpoint 3
    "#BAFFC9", // Color for Checkpoint 4
    "#BAE1FF", // Color for Checkpoint 5
    "#FFB3FF", // Color for Checkpoint 6
  ];

  const toggleCheckbox = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index]; // Toggle the checkbox state
    setChecked(newChecked);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Good Evening, Perfect</Text>
      <Text style={styles.subHeader}>Today, Fri, Oct 4</Text>

      <ScrollView>
        {Array.from({ length: 6 }, (_, i) => (
          <TouchableOpacity key={i} onPress={() => toggleCheckbox(i)} style={styles.checkpoint}>
            <Text>Checkpoint {i + 1}</Text>
            <View style={[styles.checkbox, { backgroundColor: checked[i] ? '#000' : colors[i] }]} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Text style={styles.notesHeader}>NOTES:</Text>
      <TextInput style={styles.notesInput} multiline={true} />
    </View>
  );
}

export default Checkpoint;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 18,
    marginVertical: 10,
  },
  checkpoint: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5, // Optional: Add border radius for rounded corners
  },
  notesHeader: {
    fontSize: 18,
    marginTop: 20,
  },
  notesInput: {
    borderWidth: 1,
    borderColor: '#000',
    height: 100,
    marginTop: 10,
    padding: 10,
  },
});
