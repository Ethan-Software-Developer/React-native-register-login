import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BusBooking = () => {
  const [departureLocation, setDepartureLocation] = useState('');
  const [arrivalLocation, setArrivalLocation] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [passengerCount, setPassengerCount] = useState('');
  const [confirmation, setConfirmation] = useState(null);
  const [error, setError] = useState('');

  const locations = ['Accra', 'Kumasi', 'Takoradi', 'Tamale', 'Cape Coast'];

  const handleBusBooking = async () => {
    if (departureLocation && arrivalLocation && departureDate && passengerCount) {
      try {
        setConfirmation('Bus booked successfully!');
        setError('');
      } catch (error) {
        setError('Failed to book bus. Please try again.');
      }
    } else {
      setError('Please fill all fields.');
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.titleContainer}>
          <Icon name="bus" size={24} color="#FF8C00" />
          <Text style={styles.title}>Bus Booking</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Departure Location"
          value={departureLocation}
          onChangeText={setDepartureLocation}
        />

        <TextInput
          style={styles.input}
          placeholder="Arrival Location"
          value={arrivalLocation}
          onChangeText={setArrivalLocation}
        />

        <TextInput
          style={styles.input}
          placeholder="Departure Date"
          value={departureDate}
          onChangeText={setDepartureDate}
        />

        <TextInput
          style={styles.input}
          placeholder="Passenger Count"
          value={passengerCount}
          onChangeText={setPassengerCount}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.normalButton} onPress={handleBusBooking}>
          <Text style={styles.buttonText}>Book Bus</Text>
        </TouchableOpacity>

        {error && <Text style={styles.errorText}>{error}</Text>}
        {confirmation && <Text style={styles.confirmationText}>{confirmation}</Text>}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    paddingBottom: 30,
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF8C00',
    marginLeft: 10,
  },
  input: {
    width: '90%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#FF8C00',
    borderRadius: 8,
    marginBottom: 20,
    color: '#2a2b37',
    fontSize: 16,
    backgroundColor: '#FFFFFF',
  },
  normalButton: {
    paddingVertical: 14,
    backgroundColor: '#FF8C00',
    borderRadius: 8,
    alignItems: 'center',
    width: '90%',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 20,
  },
  confirmationText: {
    color: 'green',
    marginTop: 20,
  },
});

export default BusBooking;
