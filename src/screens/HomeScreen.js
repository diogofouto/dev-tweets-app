import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Timeline from '../components/Timeline';
import { useSelector, useDispatch } from 'react-redux';
import getMessages from '../redux/actions/getMessages';

const HomeScreen = () => {

    const dispatch = useDispatch();
    useEffect( () => dispatch(getMessages()), []);
    const messages = useSelector(state => state.storeMessages.messages);

    return (
        <View style={styles.viewMainStyle}>
            {/* <View style={styles.viewSecStyle}> */}
                <Timeline 
                    data={messages}
                />
            {/* </View> */}
        </View>
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

export default HomeScreen;

//roxo: 1b1c51