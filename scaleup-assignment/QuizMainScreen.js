import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Home, Search, PlusSquare, Book, User } from 'lucide-react-native';

export default function QuizMainScreen({ navigation }) {
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
          <Text style={styles.headerTitle}>Quiz</Text>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={{ uri: 'https://img.icons8.com/ios-filled/50/FFFFFF/menu-2.png' }}
              style={styles.headerIcon}
            />
          </TouchableOpacity>
        </View>

        {/* World Ranking & Points Section */}
        <View style={styles.rankingSection}>
          <View style={styles.rankingBox}>
            {/* World Image */}
            <Image
              source={{ uri: 'https://img.icons8.com/color/48/000000/globe.png' }}
              style={styles.tinyIcon}
            />
            <View style={styles.rankContainer}>
              <Text style={styles.rankText}>20</Text>
              <Text style={styles.rankLabel}>World Ranking</Text>
            </View>
          </View>

          {/* Divider Line */}
          <View style={styles.divider} />

          <View style={styles.pointsBox}>
            {/* Star Image */}
            <Image
              source={{ uri: 'https://img.icons8.com/color/48/000000/star.png' }}
              style={styles.tinyIcon}
            />
            <View>
              <Text style={styles.pointText}>12000</Text>
              <Text style={styles.pointLabel}>Points earned</Text>
            </View>
          </View>
        </View>

        {/* Last Quiz Section */}
        <View style={styles.lastQuizSection}>
          <View style={styles.circularDesign} />
          <View style={styles.circularDesignSecondary} />
          <View style={styles.circularDesignTertiary} />
          <View style={styles.circularDesignAdditional} />
          <View style={styles.circularDesignAdditionalSecondary} />
          <Text style={styles.lastQuizTitle}>LAST QUIZ</Text>
          <View style={styles.lastQuizContent}>
            <Text style={styles.quizTopic}>UI/UX Design</Text>
            <Text style={styles.quizPoints}>Points: 150</Text>
            <View style={styles.rankTextContainer}>
              <Text style={styles.quizRank}>🏅</Text>
              <Text style={styles.quizRankText}>Rank: 1</Text>
            </View>
          </View>
        </View>

        {/* Featured Section */}
        <View style={styles.featuredSection}>
          <View style={styles.circularDesignFeatured} />
          <View style={styles.circularDesignFeaturedSecondary} />
          <View style={styles.circularDesignFeaturedTertiary} />
          <View style={styles.circularDesignFeaturedAdditional} />
          <View style={styles.circularDesignFeaturedAdditionalSecondary} />
          <Text style={styles.featuredTitle}>FEATURED</Text>
          <Text style={styles.featuredSubtitle}>Amazing Quizzes lined up for you all in</Text>
          <Text style={styles.featuredSubtitle}>Upcoming Months</Text>
          <Text style={styles.featuredSubtitle}>Stay Tuned..!</Text>
          <TouchableOpacity style={styles.notificationButton}>
            <Text style={styles.notificationButtonText}>Turn on Notifications</Text>
          </TouchableOpacity>
        </View>

        {/* View All Quizzes Section */}
        <TouchableOpacity
          style={styles.viewAllSection}
          onPress={() => navigation.navigate('UpcomingQuiz')} // Navigate to UpcomingQuizScreen
        >
          <View style={styles.circularDesignViewAll} />
          <View style={styles.circularDesignViewAllSecondary} />
          <Text style={styles.viewAllText}>View All Quizzes</Text>
        </TouchableOpacity>

      </ScrollView>

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
    backgroundColor: '#FFFFF',
    paddingTop: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#FFBB00', // Mustard Yellow background
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 20,
  },
  iconButton: {
    padding: 10,
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginTop: 20,
  },
  rankingSection: {
    flexDirection: 'row',
    backgroundColor: '#0C2D48', // Dark Blue background
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 30, // Increased padding
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  rankingBox: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  pointsBox: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  tinyIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  rankContainer: {
    alignItems: 'flex-start', // Align the text with the number to the left
  },
  rankText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  rankLabel: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 5,
    fontWeight: 'bold',
  },
  pointText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  pointLabel: {
    color: '#FFFFFF',
    fontSize: 14,
    marginLeft: 5,
  fontWeight: 'bold',
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
  },
  lastQuizSection: {
    backgroundColor: '#FFBB00',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 15, // Made the last quiz bar thinner
    marginBottom: 20,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  circularDesign: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    opacity: 0.3, // Increased opacity for brightness
    top: -30,
    right: -30,
  },
  circularDesignSecondary: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    opacity: 0.2, // Increased opacity for brightness
    top: 20,
    left: 10,
  },
  circularDesignTertiary: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    opacity: 0.25, // Increased opacity for brightness
    bottom: -20,
    right: -20,
  },
  circularDesignAdditional: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    opacity: 0.2, // Increased opacity for brightness
    top: -10,
    right: -10,
  },
  circularDesignAdditionalSecondary: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    opacity: 0.15, // Increased opacity for brightness
    bottom: 10,
    left: 10,
  },
  lastQuizTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 5,
  },
  lastQuizContent: {
    alignItems: 'center',
    fontSize:16,
    fontWeight:'bold',
  },
  quizTopic: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  quizPoints: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 14,
  },
  rankTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quizRank: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 14,
  },
  quizRankText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 14,
    marginLeft: 5,
  },
  featuredSection: {
    backgroundColor: '#0C2D48', // Dark Blue background
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 25,
    marginBottom: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  circularDesignFeatured: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    opacity: 0.3,
    top: -30,
    right: -30,
  },
  circularDesignFeaturedSecondary: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    opacity: 0.2,
    top: 20,
    left: 10,
  },
  circularDesignFeaturedTertiary: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    opacity: 0.25,
    bottom: -20,
    right: -20,
  },
  circularDesignFeaturedAdditional: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    opacity: 0.2,
    top: -10,
    right: -10,
  },
  circularDesignFeaturedAdditionalSecondary: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    opacity: 0.15,
    bottom: 10,
    left: 10,
  },
  featuredTitle: {
    fontWeight: 'bold',
    color: '#FFBB00',
    fontSize: 14,
    textAlign: 'center',
  },
  featuredSubtitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  notificationButton: {
    backgroundColor: '#FFBB00', // Mustard Yellow background
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    width: '80%', // Button width
    alignSelf: 'center',
  },
  notificationButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  viewAllSection: {
    backgroundColor: '#FFBB00',
    borderRadius: 10,
    padding: 50,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  circularDesignViewAll: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    opacity: 0.3,
    top: -30,
    right: -30,
  },
  circularDesignViewAllSecondary: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    opacity: 0.2,
    top: 20,
    left: 10,
  },
  viewAllText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
 bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#001F3F', // Dark navy bluish-black color
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navButton: {
    alignItems: 'center',
  },
 
}); 