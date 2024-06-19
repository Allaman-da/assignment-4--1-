const JobSearchPage = () => {
  const navigation = useNavigation();

  // Rest of the component code
  // ...

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={profilePicture} style={styles.profilePicture} />
          <View>
            <Text style={styles.userName}>Eric Atsu</Text>
            <Text style={styles.userEmail}>eric@gmail.com</Text>
          </View>
        </View>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.navItem}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>

      // Rest of the component code
      // ...
    </ScrollView>
  );
};