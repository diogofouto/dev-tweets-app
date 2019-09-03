import React from "react";
import { StyleSheet } from 'react-native';
import { Card, CardItem, Text, Body } from "native-base";

const TimeLineTweet = ({ name, message }) => {
    return (
          <Card style={styles.cardStyle}>
            <CardItem header button onPress={() => alert("This is Card Header")}>
              <Text>{name}</Text>
            </CardItem>
            <CardItem button onPress={() => alert("This is Card Body")}>
              <Body>
                <Text>
                  {message}
                </Text>
              </Body>
            </CardItem>
            <CardItem footer button onPress={() => alert("This is Card Footer")}>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
    );
  }

  const styles = StyleSheet.create({
    cardStyle: {
      margin: 15,
      backgroundColor: 'red'
    }
  });

  export default TimeLineTweet;
