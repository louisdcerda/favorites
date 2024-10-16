// import { Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import React from 'react';

// export default function HomeScreen() {
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
//         <ThemedText type="title">Welcome to the feed screen!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this starter app.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
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
import { View, Text, TextInput, StyleSheet, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native';

// Dummy data for favorites and trending items
const trendingFavorites = [
  { id: '1', title: 'Best Sci-Fi Books', image: 'https://via.placeholder.com/100' },
  { id: '2', title: 'Top Restaurants in NYC', image: 'https://via.placeholder.com/100' },
  { id: '3', title: 'Favorite Gadgets of 2024', image: 'https://via.placeholder.com/100' },
];

const feedFavorites = [
  { id: '1', user: 'Louis Cerda', title: 'My Favorite Movie: Interstellar', description: 'Best movie I’ve seen this year!', image: 'https://via.placeholder.com/300' },
  { id: '2', user: 'Louis Cerda', title: 'Top Coffee Shops in Madrid', description: 'These are my go-to places for coffee in Paris.', image: 'https://via.placeholder.com/300' },
];

export default function FeedPage() {
  return (
    <View style={styles.container}>
      
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search favorites..."
        />
      </View>

      {/* Trending Favorites Section */}
      <View style={styles.trendingContainer}>
        <Text style={styles.sectionTitle}>Trending Favorites</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {trendingFavorites.map((item) => (
            <TouchableOpacity key={item.id} style={styles.trendingItem}>
              <Image source={{ uri: item.image }} style={styles.trendingImage} />
              <Text style={styles.trendingText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Feed Section */}
      <FlatList
        data={feedFavorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.feedItem}>
            <Text style={styles.feedUser}>{item.user}</Text>
            <Image source={{ uri: item.image }} style={styles.feedImage} />
            <Text style={styles.feedTitle}>{item.title}</Text>
            <Text style={styles.feedDescription}>{item.description}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchBar: {
    backgroundColor: '#eee',
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  trendingContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  trendingItem: {
    marginRight: 12,
    alignItems: 'center',
  },
  trendingImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  trendingText: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  feedItem: {
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  feedUser: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#555',
  },
  feedImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  feedTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  feedDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
