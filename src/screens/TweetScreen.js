import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TweetCard from '../components/TweetCard';

const TweetScreen = ({ navigation }) => {
    //const profilePhoto = navigation.getParam('profilePhoto');
    const name = navigation.getParam('name');
    const message = navigation.getParam('message');
    const project = navigation.getParam('project');
    const date = navigation.getParam('date');

    return (
        <View>
            <TweetCard
                //profilePhoto={profilePhoto}
                name={name}
                message={message}
                project={project}
                date={date}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        margin:12
    }
});

export default TweetScreen;