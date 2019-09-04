import React from "react";
import { StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Left, Right, Body } from 'native-base';

const TweetCard = ({ profilePhoto, name, message, project, date }) => {
    return (
      <Card>
        <CardItem header bordered>
          <Left>
            <Thumbnail style={styles.thumbnailStyle} source={{uri: profilePhoto}} />
            <Body>
              <Text style={styles.textStyle}>{name}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{message}</Text>
          </Body>
        </CardItem>
        <CardItem footer bordered>
          <Left>
            <Text style={styles.textStyle}>{project}</Text>
          </Left>
          <Right>
            <Text>{date}</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }

  const styles = StyleSheet.create({
    thumbnailStyle: {
      width: 50,
      height: 50
    },
    textStyle: {
      fontWeight: 'bold'
    }
  });

  export default TweetCard;
