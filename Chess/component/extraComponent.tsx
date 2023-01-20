import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

const uid = (): string =>
  Date.now().toString(36) + Math.random().toString(36).substr(2);
const StartView = ({Name, setState}: any) => {
  return (
    <View style={styles.TextNameContainer}>
      <TextInput
        style={styles.TextInput}
        onChange={value => {
          setState({Name: value.nativeEvent.text});
        }}
        value={Name}
        placeholder={'Enter Your Name'}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log(Name);
          if (Name.replace(' ', '') !== '') {
            setState({id: uid});
          } else {
            alert('Please Enter Your Name');
          }
        }}>
        <Text style={styles.TextInButton}>Start Game</Text>
      </TouchableOpacity>
    </View>
  );
};
const WaitView = () => {
  return (
    <View style={styles.WaitingContaienr}>
      <Text>Waiting</Text>
    </View>
  );
};
const WinnerView = ({WinnerIs, id, goBack}: any) => {
  return (
    <View style={styles.absoluteContainer}>
      <View style={styles.CenterContainer}>
        <Text>
          {1 || WinnerIs.id === id ? 'You Have Won:' : 'you have lost'}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log('goBack');
            goBack();
          }}>
          <Text>Go back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  TextInButton: {color: 'white'},
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: 'lightblue',
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    borderRadius: 5,
  },
  absoluteContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  WaitingContaienr: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  CenterContainer: {
    padding: 10,
    zIndex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  TextInput: {
    width: '80%',
    borderRadius: 5,
    height: 40,
    padding: 0,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
  },
  TextNameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export {StartView, WaitView, WinnerView};
