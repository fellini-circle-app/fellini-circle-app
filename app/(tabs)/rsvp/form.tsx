// app/(tabs)/rsvp/form.tsx
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput } from 'react-native';
import Animated, { FadeInUp, FadeOutDown, Layout } from 'react-native-reanimated';
import StyledButton from '../../../components/StyledButton';

export default function RSVPForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '' });

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '' };

    if (!name.trim()) {
      newErrors.name = 'Please enter your name';
      valid = false;
    }
    if (!email.includes('@')) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      router.push('/rsvp/confirmation');
    } else {
      Alert.alert('Incomplete Details', 'Please fix the highlighted fields.');
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
      <Animated.View
        entering={FadeInUp.duration(600)}
        exiting={FadeOutDown}
        layout={Layout.springify()}
        style={styles.form}
      >
        <Text style={styles.title}>Join the Circle</Text>

        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={[styles.input, errors.name && styles.inputError]}
          placeholderTextColor="#999"
        />
        {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={[styles.input, errors.email && styles.inputError]}
          placeholderTextColor="#999"
        />
        {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

        <StyledButton title="Submit RSVP" onPress={handleSubmit} />
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', backgroundColor: '#fff', padding: 24 },
  form: { width: '100%' },
  title: { fontSize: 26, fontWeight: '700', marginBottom: 30, color: '#222', textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  inputError: {
    borderColor: '#ff5c5c',
  },
  errorText: {
    color: '#ff5c5c',
    marginBottom: 10,
    fontSize: 14,
  },
});
