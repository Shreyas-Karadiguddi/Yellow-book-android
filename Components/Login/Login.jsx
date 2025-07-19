import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const { width } = Dimensions.get('window');

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <View style={styles.logoWrapper}>
          <View style={styles.logoCircle}>
            <Image
              source={require('../../assets/icons/yellow-book-app-icon.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        </View>

        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Get access to your account and more</Text>

        <TextInput
          label="User name"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
          theme={{ roundness: 10 }}
        />

        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          style={styles.input}
          secureTextEntry
          theme={{ roundness: 10 }}
        />

        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.signInButton}
          contentStyle={{ paddingVertical: 8 }}
          labelStyle={{ fontSize: 16, fontWeight: '600' }}
          textColor='white'
        >
          Login
        </Button>

        <Text style={styles.footerText}>
          Don’t have an account?{' '}
          <Text style={styles.signUpText}>Sign up</Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e8ecf4'
  },
  innerContainer: {
    width: width * 0.85,
    alignSelf: 'center',
  },
  logoWrapper: {
    alignItems: 'center',
    marginBottom: 25,
  },
  logoCircle: {
    backgroundColor: '#EAF1FF',
    padding: 20,
    borderRadius: 100,
    elevation: 2,
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#111827',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 22,
  },
  input: {
    marginBottom: 14,
    backgroundColor: '#fff',
    elevation: 1,
  },
  signInButton: {
    marginTop: 10,
    backgroundColor: '#2962FF',
    borderRadius: 10,
    color: 'white'
  },
  footerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
    color: '#6B7280',
  },
  signUpText: {
    color: '#2962FF',
    fontWeight: '600',
  },
});
