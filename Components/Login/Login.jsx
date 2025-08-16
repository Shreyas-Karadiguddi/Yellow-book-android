import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { ALERT_TYPE } from 'react-native-alert-notification';
import { TextInput, Button, Text } from 'react-native-paper';
import * as authActions from '../../actions/auth_api';
import * as Utils from '../../Utils/Auth';
import { useToastDialog } from '../General/Notification';
import { Colors } from '../General/Colors';


const { width } = Dimensions.get('window');

const INITIAL_USER_CREDENTIALS = {
  userName: '',
  password: '',
};

const LoginScreen = () => {
  const userCredentials = useRef(INITIAL_USER_CREDENTIALS);
  const dispatch = useDispatch();

  const {
    mutate: loginUser,
    status: loginStatus,
    data: loginData,
    isLoading: isLoginLoading,
  } = authActions.useLoginUser();

  useEffect(() => {
    if (loginStatus === 'success') {
      useToastDialog(
        ALERT_TYPE.SUCCESS,
        'SUCCESS',
        'User logged in successfully',
      );
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${loginData.token}`;
      Utils.setToken(loginData.token);
      const decodedToken = Utils.decodeToken(loginData.token);
      dispatch({ type: 'SET_ROLE', payload: decodedToken.role });
      dispatch({ type: 'TOKEN', payload: loginData.token });
    } else if (loginStatus === 'error') {
      useToastDialog(ALERT_TYPE.DANGER, 'ERROR', 'Failed to login');
    }
  }, [loginStatus, loginData]);

  const handleLogin = () => {
    loginUser({
      userName: userCredentials.current.userName.trim(),
      password: userCredentials.current.password,
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
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
          mode="outlined"
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={text => (userCredentials.current.userName = text)}
          theme={{ roundness: 10 }}
        />

        <TextInput
          label="Password"
          mode="outlined"
          style={styles.input}
          secureTextEntry
          onChangeText={text => (userCredentials.current.password = text)}
          theme={{ roundness: 10 }}
        />

        <Button
          icon="login"
          mode="contained"
          onPress={handleLogin}
          style={styles.signInButton}
          contentStyle={{ paddingVertical: 8 }}
          labelStyle={{ fontSize: 16, fontWeight: '600' }}
          loading={isLoginLoading}
          disabled={isLoginLoading}
        >
          Login
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bluishGray.light,
    justifyContent: 'center',
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
    backgroundColor: Colors.bluishGray.medium,
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
  },
});
