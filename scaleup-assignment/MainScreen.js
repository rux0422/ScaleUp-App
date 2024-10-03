import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Bell, MessageSquare, Bookmark, MoreVertical, Home, Search, PlusSquare, Book, User } from 'lucide-react-native';

const AnnouncementCircle = ({ image, index }) => (
  <View style={[styles.announcementCircle, { marginLeft: index === 0 ? 0 : 10 }]}>
    <Image source={{ uri: image }} style={styles.announcementImage} />
  </View>
);

const PostCard = ({ posterName, postText, postImage, avatar }) => (
  <View style={styles.postCard}>
    <View style={styles.postHeader}>
      <View style={styles.posterInfo}>
        <Image source={{ uri: avatar }} style={styles.avatarCircle} />
        <Text style={styles.posterName}>{posterName}</Text>
      </View>
      <TouchableOpacity>
        <MoreVertical size={20} color="#000" />
      </TouchableOpacity>
    </View>
    <View style={styles.postContent}>
      <View style={styles.postImage}>
        <Image source={{ uri: postImage }} style={styles.postImageContent} />
      </View>
      <Image source={require('./assets/img8.jpeg')} style={styles.verifiedIcon} />
    </View>
    <View style={styles.postActions}>
      <View style={styles.leftActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={require('./assets/img9.jpeg')} style={styles.actionIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={require('./assets/img10.jpeg')} style={styles.actionIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={require('./assets/img11.jpeg')} style={styles.actionIcon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Bookmark size={20} color="#000" />
      </TouchableOpacity>
    </View>
    <Text style={styles.postText}>
      {postText}
      <Text style={styles.moreText}>...more</Text>
    </Text>
    <View style={styles.tagsContainer}>
      <View style={styles.tag}>
        <Text style={styles.tagText}>Design</Text>
      </View>
      <View style={styles.tag}>
        <Text style={styles.tagText}>Persona</Text>
      </View>
      <View style={styles.tag}>
        <Text style={styles.tagText}>User Flow</Text>
      </View>
    </View>
  </View>
);

export default function MainScreen({ navigation }) {
  const [avatars, setAvatars] = useState([]);

  const announcements = [
    'https://picsum.photos/100/100?random=1',
    'https://picsum.photos/100/100?random=2',
    'https://picsum.photos/100/100?random=3',
    'https://picsum.photos/100/100?random=4',
    'https://picsum.photos/100/100?random=5',
    'https://picsum.photos/100/100?random=6',
    'https://picsum.photos/100/100?random=7',
  ];

  const posts = [
    {
      posterName: 'john_doe',
      postText: 'Excited to share my latest project! Working on a user flow that simplifies the design process for users. Feedback welcome!',
      postImage: 'https://picsum.photos/400/200?random=1',
    },
    {
      posterName: 'emilyrose',
      postText: 'Design is not just about how it looks, but also how it works. Crafting user-centric personas today!',
      postImage: 'https://picsum.photos/400/200?random=2',
    },
    {
      posterName: 'david93',
      postText: 'We just finished a design sprint and I cannot wait to implement the new ideas. Design flows are coming together nicely!',
      postImage: 'https://picsum.photos/400/200?random=3',
    },
  ];

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=3');
        const data = await response.json();
        const userAvatars = data.results.map(user => user.picture.thumbnail);
        setAvatars(userAvatars);
      } catch (error) {
        console.error('Error fetching avatars:', error);
      }
    };

    fetchAvatars();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topIcons}>
          <TouchableOpacity>
            <MoreVertical size={24} color="#FFF" />
          </TouchableOpacity>
          <View style={styles.rightIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Bell size={24} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <MessageSquare size={24} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Bookmark size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView
        style={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.announcementsSection}>
          <Text style={styles.sectionTitle}>Announcements</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.announcementsScroll}
          >
            {announcements.map((image, index) => (
              <AnnouncementCircle key={index} image={image} index={index} />
            ))}
          </ScrollView>
        </View>

        <View style={styles.postsSection}>
          <Text style={styles.sectionTitle}>Post</Text>
          {posts.map((post, index) => (
            <PostCard
              key={index}
              posterName={post.posterName}
              postText={post.postText}
              postImage={post.postImage}
              avatar={avatars[index]}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Home size={24} color="#FFF" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Search size={24} color="#FFF" />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <PlusSquare size={24} color="#FFF" />
          <Text style={styles.navText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Quiz')}
        >
          <Book size={24} color="#FFF" />
          <Text style={styles.navText}>Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <User size={24} color="#FFF" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBB00',
  },
  header: {
    backgroundColor: '#FFBB00',
    padding: 16,
  },
  topIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  rightIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
  },
  scrollContent: {
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  announcementsSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  announcementsScroll: {
    flexDirection: 'row',
  },
  announcementCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
  },
  announcementImage: {
    width: '100%',
    height: '100%',
  },
  postsSection: {
    padding: 16,
  },
  postCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  posterInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    marginRight: 8,
  },
  posterName: {
    fontWeight: '500',
  },
  postContent: {
    marginBottom: 12,
  },
  postImage: {
    height: 200,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 8,
  },
  postImageContent: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  verifiedIcon: {
    width: 16,
    height: 16,
    position: 'absolute',
    right: 8,
    top: 8,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  leftActions: {
    flexDirection: 'row',
  },
  actionButton: {
    marginRight: 16,
  },
  actionIcon: {
    width: 20,
    height: 20,
  },
  postText: {
    marginBottom: 12,
  },
  moreText: {
    color: '#666666',
  },
  tagsContainer: {
    flexDirection: 'row',
  },
  tag: {
    backgroundColor: '#FFE5CC', // Light peach color
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  tagText: {
    color: '#001F3F', // Dark navy bluish color
    fontWeight: 'bold', // Bold text
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
  navText: {
    color: '#FFF', // White text
    fontSize: 12,
    fontWeight: 'bold',
  },
});
