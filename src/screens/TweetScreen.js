import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Body } from 'native-base';

const TweetScreen = ({ navigation }) => {
    const user = navigation.getParam('user');
    const message = navigation.getParam('message');

    return (
        <View>
            <Card>
                <CardItem header bordered>
                    <Text>{user}</Text>
                </CardItem>
                <CardItem bordered>
                    <Body>
                        <Text>{message}</Text>
                    </Body>
                </CardItem>
                <CardItem footer bordered>
                    <Text>Betacode</Text>
                </CardItem>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        margin:12
    }
});

export default TweetScreen;