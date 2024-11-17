import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'; // Ensure this package is installed
import { useNavigation } from '@react-navigation/native'; // Import for navigation

const Travel = () => {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Travel Services</Text>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FlightBooking')}>
        <MaterialIcons name="flight-takeoff" size={24} color="#FFA500" />
        <View style={styles.textContainer}>
          <Text style={styles.subtitle}>Book Your Flight</Text>
          <Text style={styles.buttonText}>Flight Booking</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('BusBooking')}>
        <MaterialIcons name="directions-bus" size={24} color="#FFA500" />
        <View style={styles.textContainer}>
          <Text style={styles.subtitle}>Travel by Bus</Text>
          <Text style={styles.buttonText}>Bus Booking</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('TrainBooking')}>
        <MaterialIcons name="train" size={24} color="#FFA500" />
        <View style={styles.textContainer}>
          <Text style={styles.subtitle}>Book Your Train</Text>
          <Text style={styles.buttonText}>Train Booking</Text>
        </View>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2a2b37',
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0', // Light gray for separator
  },
  textContainer: {
    marginLeft: 15,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2a2b37',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFA500',
  },
});

export default Travel;
