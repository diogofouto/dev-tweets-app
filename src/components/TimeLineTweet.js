import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const TimeLineTweet = ({ name, message }) => {
    return (
      <TouchableOpacity style={styles.cardStyle}>
        <Text>{name}</Text>
        <Text>{message}</Text>
      </TouchableOpacity>
    );
  }

  const styles = StyleSheet.create({
    cardStyle: {
      padding: 10,
      height: 120,
      borderRadius: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2, 
      flex: 1,
      marginBottom: 20
    }
  });

  export default TimeLineTweet;
