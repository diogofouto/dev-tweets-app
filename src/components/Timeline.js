import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import TimeLineTweet from './TimeLineTweet';

const Timeline = ({ data }) => {
    // data = [ 
    // {client_msg_id: '...', type: '...', text: '...', user: '...',  ts: '...', team: '...'},
    // ... ]

    return (
        <FlatList
            keyExtractor={ tweet => tweet.client_msg_id}
            data={data}
            renderItem={ ({ item }) => {
                return (
                    <Text>{item.user} - {item.text}</Text>
                );
            } }
        />
    );
};

const styles = StyleSheet.create({});

export default Timeline;