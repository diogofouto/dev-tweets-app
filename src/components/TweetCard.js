import React from "react";
import { StyleSheet } from 'react-native';
import { Card, CardItem, Text, Body } from 'native-base';

const TweetCard = ({ name, message }) => {
    return (
      <Card>
        <CardItem header bordered>
          <Text>{name}</Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>
              {message}
            </Text>
          </Body>
        </CardItem>
        <CardItem footer bordered>
          <Text>Betacode</Text>
        </CardItem>
      </Card>
    );
  }

  const styles = StyleSheet.create({});

  export default TweetCard;
