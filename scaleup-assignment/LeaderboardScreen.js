import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function LeaderboardScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={{ uri: 'https://img.icons8.com/ios-filled/50/FFFFFF/left.png' }}
              style={styles.headerIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Leaderboard</Text>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={{ uri: 'https://img.icons8.com/ios-filled/50/FFFFFF/menu-2.png' }}
              style={styles.headerIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Tabs Section */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.tabsScroll}>
          <View style={styles.tabs}>
            <TouchableOpacity style={styles.tabActive}>
              <Text style={styles.tabActiveText}>Today</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabText}>Weekly</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabText}>All Time</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Leaderboard Top 3 with Colored Bars */}
        <View style={styles.leaderboardTop}>
          <View style={styles.top2}>
            <View style={[styles.bar, styles.secondBar]} />
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/2.jpg' }}
              style={styles.topAvatar}
            />
            <View style={[styles.positionBadge, styles.secondBadge]}>
              <Text style={styles.positionText}>2</Text>
            </View>
            <Text style={styles.topName}>Liam</Text>
            <Text style={styles.topPoints}>1200</Text>
          </View>

          <View style={styles.top1}>
            <View style={[styles.bar, styles.firstBar]} />
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/women/1.jpg' }}
              style={styles.topAvatar}
            />
            <View style={[styles.positionBadge, styles.firstBadge]}>
              <Text style={styles.positionText}>1</Text>
            </View>
            <Text style={styles.topName}>Emma</Text>
            <Text style={styles.topPoints}>1500</Text>
          </View>

          <View style={styles.top3}>
            <View style={[styles.bar, styles.thirdBar]} />
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/women/3.jpg' }}
              style={styles.topAvatar}
            />
            <View style={[styles.positionBadge, styles.thirdBadge]}>
              <Text style={styles.positionText}>3</Text>
            </View>
            <Text style={styles.topName}>Noah</Text>
            <Text style={styles.topPoints}>1000</Text>
          </View>
        </View>

        {/* Leaderboard Other Positions */}
        <View style={styles.leaderboardOthers}>
          {Array.from({ length: 7 }, (_, i) => (
            <View style={styles.leaderboardRow} key={i}>
              <Text style={styles.rowRank}>{i + 4}</Text>
              <Image
                source={{ uri: `https://randomuser.me/api/portraits/med/men/${i + 5}.jpg` }}
                style={styles.rowAvatar}
              />
              <View style={styles.rowText}>
                <Text style={styles.rowName}>
                  {['Max', 'Leo', 'Sam', 'Ray', 'Ben', 'Jake', 'Zac'][i]}
                </Text>
                <Text style={styles.rowDesignation}>Dev</Text>
              </View>
              <Text style={styles.rowPoints}>Points</Text>
            </View>
          ))}
        </View>
      </ScrollView>
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
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#FFBB00',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  iconButton: {
    padding: 10,
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  tabsScroll: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  tabText: {
    color: '#777777',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tabActive: {
    backgroundColor: '#1E3A5F',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  tabActiveText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  leaderboardTop: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginVertical: 20,
    paddingBottom: 20,
  },
  top1: { alignItems: 'center', position: 'relative' },
  top2: { alignItems: 'center', position: 'relative' },
  top3: { alignItems: 'center', position: 'relative' },
  topAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  topName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  topPoints: {
    fontSize: 14,
    color: '#777',
  },
  bar: {
    width: 80,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  firstBar: { backgroundColor: '#FFD700', height: 150 },
  secondBar: { backgroundColor: '#C0C0C0', height: 120 },
  thirdBar: { backgroundColor: '#CD7F32', height: 90 },
  positionBadge: {
    position: 'absolute',
    top: 60,
    right: -10,
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstBadge: { backgroundColor: '#FFD700' },
  secondBadge: { backgroundColor: '#C0C0C0' },
  thirdBadge: { backgroundColor: '#CD7F32' },
  positionText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  leaderboardOthers: {
    paddingHorizontal: 20,
  },
  leaderboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  rowRank: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFBB00',
    width: 30,
  },
  rowAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  rowText: {
    flex: 1,
    marginLeft: 10,
  },
  rowName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  rowDesignation: {
    fontSize: 14,
    color: '#777',
  },
  rowPoints: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

