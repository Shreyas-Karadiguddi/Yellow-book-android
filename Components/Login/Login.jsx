import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import { TextInput, Button, Text, Card } from 'react-native-paper';
import * as authActions from '../../actions/auth_api';

const { width, height } = Dimensions.get('window');

const INITIAL_USER_CREDENTIALS = {
  userName: '',
  password: '',
};

const LoginScreen = () => {
  const userCredentials = useRef(INITIAL_USER_CREDENTIALS);

  const {
    mutate: loginUser,
    status: loginStatus,
    data: loginData,
    isLoading: isLoginLoading,
  } = authActions.useLoginUser();

  useEffect(() => {
    if (loginStatus === 'success') {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${loginData.token}`;

      console.log('Login successful:', loginData);
    } else if (loginStatus === 'error') {
      console.log('Login failed:', loginData);
    }
  }, [loginStatus, loginData, isLoginLoading]);

  const handleLogin = () => {
    loginUser({
      userName: userCredentials.current.userName,
      password: userCredentials.current.password,
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.iconWrapper}>
            <Image
              source={require('../../assets/icons/yellow-book-app-icon.png')}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>
        </View>

        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.loginTitle}>LOGIN</Text>

            <TextInput
              label="Username"
              defaultValue={userCredentials.current.userName}
              onChangeText={text => (userCredentials.current.userName = text)}
              mode="flat"
              style={styles.input}
              autoCapitalize="none"
            />

            <TextInput
              label="Password"
              defaultValue={userCredentials.current.password}
              onChangeText={text => (userCredentials.current.password = text)}
              mode="flat"
              style={styles.input}
              secureTextEntry
            />

            <Button
              mode="contained"
              onPress={handleLogin}
              style={styles.button}
              loading={isLoginLoading}
              disabled={isLoginLoading}
            >
              LOGIN
            </Button>

            <TouchableOpacity>
              <Text style={styles.forgotText}>FORGOT PASSWORD?</Text>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2962FF',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: -30,
  },
  iconWrapper: {
    backgroundColor: 'white',
    padding: width * 0.05,
    borderRadius: 100,
    marginBottom: 50,
  },
  icon: {
    width: width * 0.1,
    height: width * 0.1,
    tintColor: '#2962FF',
  },
  card: {
    width: width * 0.85,
    borderRadius: 16,
    elevation: 6,
    paddingVertical: height * 0.02,
  },
  loginTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2962FF',
  },
  input: {
    marginBottom: 12,
    backgroundColor: 'transparent',
  },
  button: {
    marginTop: 8,
    borderRadius: 30,
    paddingVertical: 6,
    backgroundColor: '#2962FF',
  },
  forgotText: {
    marginTop: 12,
    textAlign: 'center',
    color: '#2962FF',
    fontWeight: '600',
  },
});
