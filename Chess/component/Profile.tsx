import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';

const Profile = ({User}: any) => {
  return (
    <View style={{width: '40%'}}>
      <View style={styles.UserContainer}>
        <View style={styles.ProfileContainer}>
          <Image
            style={styles.Images}
            source={
              User.color == 'w'
                ? require(`../assets/wk.png`)
                : require(`../assets/bk.png`)
            }
          />
        </View>

        <View style={styles.NameContaienr}>
          <View>
            <Text style={styles.NameContaienr}>{User.Name}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  StonesContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    flexDirection: 'row',
  },
  UserContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  ProfileContainer: {
    width: 35,
    borderRadius: 28,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: 'gray',
    height: 35,
  },
  Images: {width: '100%', height: '100%', resizeMode: 'contain'},
  NameContaienr: {justifyContent: 'center', alignItems: 'flex-end'},
  TextName: {color: 'white', fontSize: 10, marginTop: 15},
});
