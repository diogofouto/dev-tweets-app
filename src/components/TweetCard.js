import React from "react";
import { StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Left, Right, Body } from 'native-base';

const TweetMessage = ({ message, limited=true} ) => {
  if (limited) {
    const delimitator = message.length > 300? '...' : '';
    const newMessage = message.substring(0, 300);
    return <Text>{newMessage} {delimitator}</Text>
  }
  else {
    return <Text>{message}</Text>
  }
}

const TweetCard = ({ avatar, name, message, project, date, limited=true }) => {
    return (
      <Card>
        <CardItem header bordered>
          <Left>
            <Thumbnail style={styles.thumbnailStyle} source={{uri: avatar}} />
            <Body>
              <Text style={styles.textStyle}>{name}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem bordered>
          <Body>
            <TweetMessage message={message} limited={limited}/>
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
