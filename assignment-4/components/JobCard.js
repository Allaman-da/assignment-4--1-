import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const JobCard = ({ job, type }) => {
  return (
    <View style={[styles.card, type === 'featured' ? styles.featuredCard : styles.popularCard]}>
      <Image source={job.logo} style={styles.logo} />
      <View style={styles.details}>
        <Text style={[styles.title, type === 'featured' ? styles.featuredTitle : styles.popularTitle]}>{job.title}</Text>
        <Text style={[styles.company, type === 'featured' ? styles.featuredCompany : styles.popularCompany]}>{job.company}</Text>
        <Text style={[styles.salary, type === 'featured' ? styles.featuredSalary : styles.popularSalary]}>{job.salary}</Text>
        <Text style={[styles.location, type === 'featured' ? styles.featuredLocation : styles.popularLocation]}>{job.location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 5,
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
    bottom:8,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
     bottom:25,
  },
  company: {
    fontSize: 14,
     bottom:20,
  },
  salary: {
    fontSize: 14,
  },
  location: {
    fontSize: 14,
  },
  // Featured styles
  featuredCard: {
    backgroundColor: '#5386E4',
    borderColor: '#ddd',
   height:130,
    borderRadius:8
    
  },
  featuredTitle: {
    color: '#fff',
    top:5,
  },
  featuredCompany: {
    color: '#fff',
    top:10,
  },
  featuredSalary: {
    color: '#fff',
    top:40,
    right:50,
  },
  featuredLocation: {
    color: '#fff',
    left: 60,
    top:23,
  },
  // Popular styles
  popularCard: {
    backgroundColor: '#f9f9f9',
    borderColor: '#f0f0f0',
    borderWidth: 1,
    
  },
  popularTitle: {
    color: '#000',
    top:15,
  },
  popularCompany: {
    color: '#000',
    top:15,
  },
  popularSalary: {
    color: '#000',
    left: 180,
    fontWeight:'bold',
    bottom:20,
  },
  popularLocation: {
    color: '#000',
    left: 180,
    bottom:20,
  },
});

export default JobCard;