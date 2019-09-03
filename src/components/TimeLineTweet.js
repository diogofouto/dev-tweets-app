import React from "react";
import { Card, CardItem, Text, Body } from "native-base";

const TimeLineTweet = ({ name, message }) => {
    return (
          <Card>
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

  export default TimeLineTweet;
