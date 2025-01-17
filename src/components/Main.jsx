import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import closeIcon from '../assets/cerrar.png';

function Main() {
  const [onFocus, setOnFocus] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBlur = () => {
    if (!validateEmail(email) && email !== '') {
      setError('Correo electrónico no válido');
    } else {
      setError('');
    }
    setOnFocus(email !== '');
  };

  const handleClearEmail = () => {
    setEmail('');
    setError('');
    setOnFocus(false);
  };

  return (
    <View style={styles.containerPhather}>
      <View style={[styles.container, onFocus && styles.containerFocused]}>
        <View style={styles.inputContainer}>
          {onFocus && (
            <Text
              style={[styles.label, (onFocus || email) ? styles.labelActive : styles.labelInactive, error && styles.labelError]}
            >
              {error ? error : 'Correo electrónico'}
            </Text>
          )}
          <TextInput
            value={email}
            onChangeText={setEmail}
            onFocus={() => setOnFocus(true)}
            onBlur={handleBlur}
            placeholderTextColor="#7876b1"
            style={styles.input}
            placeholder={onFocus ? '' : 'Escribe tu correo electrónico'}
          />
        </View>
        <TouchableOpacity onPress={handleClearEmail}>
          <Image source={closeIcon} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPhather: {
    margin: 50,
  },
  container: {
    height: 60,
    width: 300,
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: '#141534',
    paddingHorizontal: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  containerFocused: {
    shadowColor: '#7D77FF',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
    borderColor: '#7D77FF',
  },
  inputContainer: {
    flex: 1,
    position: 'relative',
  },
  label: {
    position: 'absolute',
    left: 6,
    fontSize: 14,
    fontWeight: 'bold',
  },
  labelInactive: {
    top: 15,
    fontSize: 18,
    color: '#7876b1',
  },
  labelActive: {
    top: -10,
    fontSize: 12,
    color: '#7D77FF',
  },
  labelError: {
    color: '#FF4D4D',
  },
  input: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  image: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
});

export default Main;
