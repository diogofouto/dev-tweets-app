import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import TweetCard from './TweetCard';

const Timeline = ({ data, navigation }) => {
    return (
        <FlatList
            data={data}
            keyExtractor={ tweet => tweet.ts }
            renderItem={ ({ item }) => {
                return ( 
                    <TouchableOpacity onPress={() =>
                        navigation.navigate('Tweet', 
                            {//profilePhoto: item.profilePhoto, 
                                name: item.name, 
                                message: item.message,
                                project: item.message.split('\n')[0],
                                date: item.date
                            })
                        }>
                        <TweetCard
                            //profilePhoto={item.profilePhoto}
                            name={item.name}
                            message={item.message}
                            project={item.message.split('\n')[0]}
                            date={item.date}
                        />
                    </TouchableOpacity>
                );
            } }
        />
    );
};

const styles = StyleSheet.create({});

export default withNavigation(Timeline);