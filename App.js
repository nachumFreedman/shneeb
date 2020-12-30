import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import {
  Player,
  Recorder,
  MediaStates
} from '@react-native-community/audio-toolkit';

let doingShneeb = false;

function App(props) {
  const onShneeb = () => {
    doingShneeb = true;

    new Player("shnee.mp4")
      .play()
      .on('ended', () => {
        // Enable button again after playback finishes
        onBu();

      });
  };

  const onBu = () => {
    Player.pause();
    new Player("bu.mp4")
      .play()
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onShneeb} onPressOut={onBu} style={styles.button}>
        <Text style={styles.shneeb}>Shneeb</Text>
      </TouchableOpacity>
      <Text style={styles.prepareYourShneeb}>Prepare your shneeb</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,1,1,1)",
    paddingLeft: "5%"
  },
  button: {
    height: 177,
    backgroundColor: "rgba(175,4,4,0.68)",
    width: 184,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.68)",
    borderRadius: 100,
    shadowColor: "rgba(55,10,10,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    marginTop: 318,
    marginLeft: 95
  },
  shneeb: {
    color: "rgba(222,209,209,1)",
    marginTop: 79,
    marginLeft: 69
  },
  prepareYourShneeb: {
    color: "rgba(255,255,255,1)",
    lineHeight: 25,
    marginTop: -304,
    marginLeft: 123
  }
});

export default App;
