import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import TweetCard from './TweetCard';

const Timeline = ({ data, navigation }) => {
    return (
        <FlatList
            data={data}
            keyExtractor={ tweet => tweet.client_msg_id}
            renderItem={ ({ item }) => {
                return ( 
                    <TouchableOpacity onPress={() =>
                        navigation.navigate('Tweet', {user: item.user, message: item.text})
                        }>
                        <TweetCard
                            name={item.user}
                            message={item.text.split('\n')[0]}
                        />
                    </TouchableOpacity>
                );
            } }
        />
    );
};

const styles = StyleSheet.create({});

export default withNavigation(Timeline);