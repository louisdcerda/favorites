// import { Image, StyleSheet } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import React from 'react';

// export default function ProfileScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>

//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">This is the profile tab</ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });


import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

// Dummy data for user's favorite items
const userFavorites = [
  { id: '1', title: 'Favorite Book: Dune', image: 'https://via.placeholder.com/150' },
  { id: '2', title: 'Best Travel Spot: Bali', image: 'https://via.placeholder.com/150' },
  { id: '3', title: 'Favorite Movie: Inception', image: 'https://via.placeholder.com/150' },
  { id: '4', title: 'Top Restaurant: Joe’s Pizza', image: 'https://via.placeholder.com/150' },
];

export default function ProfilePage() {
  return (
    <View style={styles.container}>
      
      {/* User Info Section */}
      <View style={styles.userInfoContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>Louis Cerda</Text>
        <Text style={styles.userBio}>
          I love sharing my favorite books, travel spots, and tech gadgets!
        </Text>

        {/* Follow Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      {/* User's Favorites Section */}
      <View style={styles.favoritesContainer}>
        <Text style={styles.sectionTitle}>My Favorites</Text>

        <FlatList
          data={userFavorites}
          keyExtractor={(item) => item.id}
          numColumns={2} // Display in a grid format
          renderItem={({ item }) => (
            <View style={styles.favoriteItem}>
              <TouchableOpacity>
                <Image source={{ uri: item.image }} style={styles.favoriteImage} />
                <Text style={styles.favoriteTitle}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  userInfoContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  userBio: {
    fontSize: 14,
    color: '#666',
    marginTop: 6,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  statItem: {
    marginHorizontal: 20,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  favoritesContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  favoriteItem: {
    flex: 1,
    margin: 8,
    alignItems: 'center',
  },
  favoriteImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 6,
  },
  favoriteTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
});




