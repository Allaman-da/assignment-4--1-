import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import JobCard from '../components/JobCard';

const HomeScreen = ({ route, navigation }) => {
  const { name, email } = route.params;

  const featuredJobs = [
    { id: '1', title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', logo: require('../assets/facebook.png') },
    { id: '2', title: 'Software Engineer', company: 'Google', salary: '$160,000', location: 'San Francisco, CA', logo: require('../assets/google.png') },
    { id: '3', title: 'Backend Developer', company: 'Microsoft', salary: '$140,000', location: 'Seattle, WA', logo: require('../assets/microsoft.png') },
    { id: '4', title: 'Frontend Developer', company: 'Apple', salary: '$150,000', location: 'Cupertino, CA', logo: require('../assets/apple.png') },
    { id: '5', title: 'DevOps Engineer', company: 'Amazon', salary: '$170,000', location: 'New York, NY', logo: require('../assets/amazon.png') },
    { id: '6', title: 'Data Scientist', company: 'IBM', salary: '$160,000', location: 'Austin, TX', logo: require('../assets/ibm.png') },
    { id: '7', title: 'Mobile Developer', company: 'Spotify', salary: '$130,000', location: 'Boston, MA', logo: require('../assets/spotify.png') },
    { id: '8', title: 'UI/UX Designer', company: 'Netflix', salary: '$120,000', location: 'Los Angeles, CA', logo: require('../assets/netflix.png') },
  ];

  const popularJobs = [
    { id: '1', title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', logo: require('../assets/burgerking.png') },
    { id: '2', title: 'Product Manager', company: 'McDonald\'s', salary: '$100,000/y', location: 'San Francisco, CA', logo: require('../assets/mcdonalds.png') },
    { id: '3', title: 'Assistant', company: 'KFC', salary: '$90,000/y', location: 'Houston, TX', logo: require('../assets/kfc.png') },
    { id: '4', title: 'Chef', company: 'Subway', salary: '$80,000/y', location: 'Chicago, IL', logo: require('../assets/subway.png') },
    { id: '5', title: 'Cashier', company: 'Pizza Hut', salary: '$70,000/y', location: 'Miami, FL', logo: require('../assets/pizza-hut.png') },
    { id: '6', title: 'Waiter', company: 'Starbucks', salary: '$60,000/y', location: 'New York, NY', logo: require('../assets/starbucks.png') },
    { id: '7', title: 'Barista', company: 'Dunkin\' Donuts', salary: '$50,000/y', location: 'Boston, MA', logo: require('../assets/dunkin-donuts.png') },
    { id: '8', title: 'Cleaner', company: 'Chipotle', salary: '$40,000/y', location: 'Los Angeles, CA', logo: require('../assets/chipotle.png') },
  ];

  return (
    
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={require('../assets/profile.jpg')} style={styles.profilePicture} />
          <View>
            <Text style={styles.userName}>{name} Baffah Matilda</Text>
            <Text style={styles.userEmail}>{email}baffahmatilda@gmail.com</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navItem}>Home</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} placeholder="Search a job or position" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <FlatList
          data={featuredJobs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <JobCard job={item} type="featured"  />}
          horizontal
          showHorizontalScrollIndicator={false}
        />
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllButtonText}>See all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>  
        <FlatList
          data={popularJobs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <JobCard job={item} type="popular"  />}

        />
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllButtonText}>See all</Text>
        </TouchableOpacity>
        
      </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {

    paddingTop:60,
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 12,
    left:340,
    backgroundcolor:'#fff',
  },
  userName: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    right:65,
  },
  userEmail: {
    color: '#ccc',
    fontSize: 14,
     right:60,
  },
  navItem: {
    color: '#000',
    fontSize: 16,
    bottom:43,
    right:345,
  },
  searchBar: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f0f0f0',
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
  },
  section: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 12,
  },
  seeAllButton: {
    alignItems: 'center',
    marginVertical: 8,
    bottom:190,
    left:170,
  },
  seeAllButtonText: {
    fontSize: 16,
    color: '#2C3E50',
  },
});

export default HomeScreen;
