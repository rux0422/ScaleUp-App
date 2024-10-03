import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Import the navigation hook
import { Home, Search, PlusSquare, Book, User } from 'lucide-react-native';

export default function NoUpcomingQuizScreen() {
  const navigation = useNavigation();  // Initialize navigation

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
          <Text style={styles.headerTitle}>Chats</Text>
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

        {/* No Upcoming Quizzes Section */}
        <View style={styles.noQuizzesContainer}>
          <Image
            source={require('./assets/img12.jpeg')}
            style={styles.noQuizzesIcon}
          />
          <Text style={styles.noQuizzesTitle}>No Upcoming Quizzes</Text>
          <Text style={styles.noQuizzesText}>
            You're all set for now! No quizzes are scheduled. Keep exploring and stay sharp!
          </Text>
          <TouchableOpacity
            style={styles.exploreButton}
            onPress={() => navigation.navigate('Leaderboard')}  // Add navigation here
          >
            <Text style={styles.exploreButtonText}>Explore Content</Text>
          </TouchableOpacity>
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
    paddingVertical: 50,
    backgroundColor: '#FFBB00',
    elevation: 3,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlignVertical: 'bottom',
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
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: 20,
    justifyContent: 'space-between',
    elevation: 3,
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
    paddingVertical: 0,
    backgroundColor: '#FFFFFF',
  },
  tab: {
    color: '#CCCCCC',
    fontSize: 16,
    paddingVertical: 10,
  },
  tabActive: {
    color: '#FFBB00',
    fontSize: 16,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#FFBB00',
    paddingBottom: 5,
    paddingVertical: 10,
  },
  noQuizzesContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  noQuizzesIcon: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  noQuizzesTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  noQuizzesText: {
    fontSize: 16,
    color: '#777777',
    textAlign: 'center',
    marginBottom: 20,
  },
  exploreButton: {
    backgroundColor: '#001F3F',
    paddingVertical: 15,
    paddingHorizontal: 120,
    borderRadius: 10,
  },
  exploreButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
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
