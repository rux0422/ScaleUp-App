import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [loginType, setLoginType] = useState('mobile');
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [serverOtp, setServerOtp] = useState(''); // Simulated server OTP
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  // Validate Indian mobile number (10 digits and starts with 6-9)
  const isValidMobileNumber = (number) => {
    const indianMobilePattern = /^[6-9]\d{9}$/;
    return indianMobilePattern.test(number);
  };

  // Simulate sending OTP
  const sendOtp = () => {
    if (!isValidMobileNumber(mobileNumber)) {
      alert('Please enter a valid Indian mobile number.');
      return;
    }

    const generatedOtp = '1234'; // Simulated OTP
    setServerOtp(generatedOtp);
    alert(`OTP sent to ${mobileNumber}: ${generatedOtp}`); // Alert to show simulated OTP
    setShowOtpScreen(true); // Show OTP screen after sending OTP
  };

  // Handle OTP verification
  const handleVerifyOtp = () => {
    if (otp === serverOtp) {
      alert('OTP verified successfully!'); // Alert for successful verification
      navigation.navigate('Main'); // Navigate to MainScreen
    } else {
      alert('Invalid OTP, please try again.'); // Alert for invalid OTP
    }
  };

  // Handle email and password login
  const handleLogin = () => {
    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Gmail format validation
    if (!emailPattern.test(email)) {
      alert('Please enter a valid Gmail address.');
      return;
    }

    // Validate password (for demonstration purposes, check if it's not empty)
    if (password.trim() === '') {
      alert('Please enter your password.');
      return;
    }

    // Simulate successful login
    alert('Login successful!'); // You would typically authenticate with a backend here
    navigation.navigate('Main'); // Navigate to MainScreen
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.topBackground}></View>

        <View style={styles.mainContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require('./assets/img5.jpeg')}
              style={styles.logo}
            />
          </View>

          {!showOtpScreen ? (
            <>
              <Text style={styles.welcomeText}>Welcome Back..!</Text>
              <Text style={styles.subText}>Unlock Focused, Distraction-free Learning</Text>
              <Text style={styles.subText}>Login now</Text>
            </>
          ) : (
            <>
              <Text style={styles.otpTitle}>OTP</Text>
              <Text style={styles.otpSubText}>We have sent the OTP to your Mobile Number</Text>
            </>
          )}

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[styles.toggleButton, loginType === 'username' ? styles.activeToggle : styles.inactiveToggle]}
              onPress={() => {
                setLoginType('username');
                setShowOtpScreen(false);
                setEmail(''); // Clear email
                setPassword(''); // Clear password
              }}
            >
              <Text style={loginType === 'username' ? styles.activeToggleText : styles.inactiveToggleText}>
                Username
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.toggleButton, loginType === 'mobile' ? styles.activeToggle : styles.inactiveToggle]}
              onPress={() => {
                setLoginType('mobile');
                setShowOtpScreen(false);
                setEmail(''); // Clear email
                setPassword(''); // Clear password
              }}
            >
              <Text style={loginType === 'mobile' ? styles.activeToggleText : styles.inactiveToggleText}>
                Mobile No
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            {loginType === 'mobile' ? (
              showOtpScreen ? (
                <>
                  <TextInput
                    style={styles.input}
                    placeholder="Mobile No"
                    placeholderTextColor="#A0A0A0"
                    keyboardType="phone-pad"
                    value={mobileNumber}
                    onChangeText={setMobileNumber}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="OTP"
                    placeholderTextColor="#A0A0A0"
                    keyboardType="number-pad"
                    value={otp}
                    onChangeText={setOtp}
                  />
                  <View style={styles.resendContainer}>
                    <Text style={styles.resendText}>Didn't receive OTP? </Text>
                    <TouchableOpacity onPress={sendOtp}>
                      <Text style={styles.resendLink}>Resend Code</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={styles.actionButton} onPress={handleVerifyOtp}>
                    <Text style={styles.actionButtonText}>Login</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TextInput
                    style={styles.input}
                    placeholder="Mobile No"
                    placeholderTextColor="#A0A0A0"
                    keyboardType="phone-pad"
                    value={mobileNumber}
                    onChangeText={setMobileNumber}
                  />
                  <TouchableOpacity 
                    style={styles.actionButton}
                    onPress={sendOtp}
                  >
                    <Text style={styles.actionButtonText}>Request OTP</Text>
                  </TouchableOpacity>
                </>
              )
            ) : (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Username/Email"
                  placeholderTextColor="#A0A0A0"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#A0A0A0"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.actionButton} onPress={handleLogin}>
                  <Text style={styles.actionButtonText}>Login</Text>
                </TouchableOpacity>
              </>
            )}
          </View>

          <Text style={styles.orText}>Or continue with</Text>
          <View style={styles.socialLoginContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('./assets/img6.jpeg')}
                style={styles.socialIcon}
              />
              <Text style={styles.socialText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('./assets/img7.jpeg')}
                style={styles.socialIcon}
              />
              <Text style={styles.socialText}>Apple</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account! </Text>
            <TouchableOpacity>
              <Text style={styles.signupLink}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  otpTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#011F3B',
    marginBottom: 10,
  },
  otpSubText: {
    fontSize: 16,
    color: '#7A7A7A',
    marginBottom: 20,
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  resendText: {
    color: '#7A7A7A',
  },
  resendLink: {
    color: '#FFBB00',
    fontWeight: 'bold',
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  topBackground: {
    height: 80,
    backgroundColor: '#FFBB00',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  mainContainer: {
    paddingHorizontal: 20,
    marginTop: -30,
    backgroundColor: '#FFF',
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#011F3B',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#011F3B',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#7A7A7A',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 20,
  },
  toggleButton: {
    flex: 0.48,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  activeToggle: {
    backgroundColor: '#FFBB00',
  },
  inactiveToggle: {
    backgroundColor: '#FFFFFF',
  },
  activeToggleText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  inactiveToggleText: {
    color: '#FFBB00',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionButton: {
    backgroundColor: '#011F3B',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: '#7A7A7A',
    marginVertical: 20,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    flex: 0.48,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialText: {
    fontWeight: '500',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    color: '#7A7A7A',
  },
  signupLink: {
    color: '#FFBB00',
    fontWeight: 'bold',
  },
});

