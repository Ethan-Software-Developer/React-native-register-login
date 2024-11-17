import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

export default function SendMoneyScreen({ navigation }) {
  const [recipientAccount, setRecipientAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMoney = async () => {
    if (!recipientAccount || !amount) {
      Alert.alert('Error', 'Please enter all required fields.');
      return;
    }

    if (isNaN(amount) || parseFloat(amount) <= 0) {
      Alert.alert('Error', 'Please enter a valid amount.');
      return;
    }

    try {
      const response = await axios.post(
        'http://192.168.1.113:8000/api/send-money/',
        {
          recipient_account: recipientAccount,
          amount,
          message,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token YOUR_AUTH_TOKEN`,
          }
        }
      );

      if (response.status === 200) {
        Alert.alert('Success', 'Money sent successfully!');
        setRecipientAccount('');
        setAmount('');
        setMessage('');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.response?.data?.detail || 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Money</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Recipient Account Number"
        value={recipientAccount}
        onChangeText={setRecipientAccount}
      />

      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <TextInput
        style={styles.input}
        placeholder="Message (Optional)"
        value={message}
        onChangeText={setMessage}
      />

      <TouchableOpacity style={styles.button} onPress={handleSendMoney}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
