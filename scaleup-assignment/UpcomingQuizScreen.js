import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Home, Search, PlusSquare, Book, User } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';  // Import navigation hook

export default function UpcomingQuizScreen() {
  const navigation = useNavigation();  // Use the hook to access navigation

  return (
    <View style={styles.container}>
      <ScrollView>

        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={{ uri: 'https://img.icons8.com/ios-filled/50/FFFFFF/left.png' }}
              style={styles.headerIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Upcoming Quizzes</Text>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={{ uri: 'https://img.icons8.com/ios-filled/50/FFFFFF/menu-2.png' }}
              style={styles.headerIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Search Section */}
        <View style={styles.searchSection}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/CCCCCC/search.png' }}
            style={styles.searchIcon}
          />
          <Text style={styles.searchText}>Search</Text>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/CCCCCC/voice-recognition-scan.png' }}
            style={styles.micIcon}
          />
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/CCCCCC/menu-2.png' }}
            style={styles.filterIcon}
          />
        </View>

        {/* Tabs Section */}
        <View style={styles.tabs}>
          <Text style={styles.tabActive}>UPCOMING</Text>
          <Text style={styles.tab}>ACTIVE</Text>
          <Text style={styles.tab}>COMPLETED</Text>
        </View>

        {/* Quiz Cards Section */}
        <View style={styles.quizContainer}>
          {[1, 2, 3, 4].map((quiz, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.quizCard}
              onPress={() => navigation.navigate('NoUpcomingQuiz')} // Navigate on press
            >
              <View style={styles.quizInfo}>
                <Image
                  source={{ uri: 'https://img.icons8.com/color/48/000000/monitor.png' }}
                  style={styles.quizIcon}
                />
                <View>
                  <Text style={styles.quizName}>Quiz Name</Text>
                  <Text style={styles.quizCategory}>Category</Text>
                  <Text style={styles.quizReward}>🎁 Surprise Reward for Top 3 Winners</Text>
                </View>
              </View>
              <View style={styles.quizDetails}>
                <Text style={styles.quizDate}>10/09/2024</Text>
                <Text style={styles.quizTime}>10:00 am</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Home size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Search size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <PlusSquare size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Book size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <User size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40, // Increased padding for top bar
    backgroundColor: '#FFBB00',
    elevation: 3, // Add shadow to top bar
  },
  headerTitle: {
    fontSize: 22, // Font size for header text
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlignVertical: 'bottom', // Aligns text downwards
  },
  iconButton: {
    padding: 10,
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF', // Changed background color to white
    borderRadius: 10,
    marginVertical: 20,
    justifyContent: 'space-between',
    elevation: 3, // Add slight shadow
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchText: {
    color: '#CCCCCC',
    fontSize: 16,
    flex: 1,
  },
  micIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  filterIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 0, // Increased padding for tabs
    backgroundColor: '#FFFFFF',
  },
  tab: {
    color: '#CCCCCC',
    fontSize: 16,
    paddingVertical: 10, // Added padding for individual tabs
  },
  tabActive: {
    color: '#FFBB00',
    fontSize: 16,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#FFBB00',
    paddingBottom: 5,
    paddingVertical: 10, // Added padding for active tab
  },
  quizContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  quizCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 30,
    marginBottom: 15,
    elevation: 3,
    flexDirection: 'row', // Change to row for better alignment
    justifyContent: 'space-between',
  },
  quizInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  quizIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  quizName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  quizCategory: {
    color: '#777777',
    fontSize: 14,
  },
  quizReward: {
    color: '#777777', // Changed color to #777777
    fontSize: 12,
  },
  quizDetails: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  quizDate: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
  },
  quizTime: {
    fontSize: 14,
    color: '#777777',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#001F3F',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navButton: {
    alignItems: 'center',
  },
});
