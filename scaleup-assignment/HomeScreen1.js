import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ArrowIcon from './components/ArrowIcon';  // Import the SVG Arrow Icon

export default function HomeScreen1({ navigation }) {
  const images = [
    require('./assets/img1.jpeg'),
    require('./assets/img2.jpeg'),
    require('./assets/img3.jpeg'),
    require('./assets/img4.jpeg'), // Add more images as needed
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleArrowPress = () => {
    // Move to the next image, cycle back to the first image when reaching the end
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handleLoginPress = () => {
    // Navigate to the login screen
    navigation.navigate('Login1');
  };

  return (
    <View style={styles.container}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={images[currentImageIndex]}  // Dynamically change the image
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Arrow Button */}
      <TouchableOpacity style={styles.arrowButton} onPress={handleArrowPress}>
        <ArrowIcon />
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFBB00',  // Yellow background
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '75%',
    aspectRatio: 1,
  },
  arrowButton: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,  // Circular button
  },
  loginButton: {
    position: 'absolute',
    top: 50,  // Position at the top
    right: 20,  // Position at the right
    backgroundColor: '#000',  // Black background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  loginText: {
    color: '#fff',  // White text for login button
    fontSize: 16,
    fontWeight:'bold',
  },
});

