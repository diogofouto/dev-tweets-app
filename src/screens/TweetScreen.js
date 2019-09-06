import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import TweetCard from '../components/TweetCard';

const TweetScreen = ({ navigation }) => {
    const avatar = navigation.getParam('avatar');
    const name = navigation.getParam('name');
    const message = navigation.getParam('message');
    const project = navigation.getParam('project');
    const date = navigation.getParam('date');

    return (
        <ScrollView style={styles.viewMainStyle}>
            <View style={styles.viewSecStyle}>
                <TweetCard
                    avatar={avatar}
                    name={name}
                    message={message}
                    project={project}
                    date={date}
                    limited={false}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    viewMainStyle: {
        backgroundColor: '#E0E0E0'
    },
    viewSecStyle: {
        margin:12
    }
});

export default TweetScreen;