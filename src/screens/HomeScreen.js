import React from 'react';
import { View, StyleSheet } from 'react-native';
import Timeline from '../components/Timeline';
import useRetrieveTweets from '../hooks/useRetrieveTweets';

const HomeScreen = () => {
    //const [searchApi, tweets, errorMessage] = useRetrieveTweets();

    const testData =  [
        {
            client_msg_id: "101c1293-c166-42f6-83ae-4a3320e66904",
            type: "message",
            text: "- eapy support bugs\n- endpoints for blueprints api 2.0\n- api for decision rules",
            user: "U5FP8583B",
            ts: "1526496067.000374",
            team: "T5FL9A7H6"
        },
        {
            client_msg_id: "101c1293-c166-42f6-83ae-4a3320e66904",
            type: "message",
            text: "- eapy support bugs\n- endpoints for blueprints api 2.0\n- api for decision rules",
            user: "U5FP8583B",
            ts: "1526496067.000374",
            team: "T5FL9A7H6"
        },
        {
            client_msg_id: "101c1293-c166-42f6-83ae-4a3320e66904",
            type: "message",
            text: "- eapy support bugs\n- endpoints for blueprints api 2.0\n- api for decision rules",
            user: "U5FP8583B",
            ts: "1526496067.000374",
            team: "T5FL9A7H6"
        },
        {
            client_msg_id: "101c1293-c166-42f6-83ae-4a3320e66904",
            type: "message",
            text: "- eapy support bugs\n- endpoints for blueprints api 2.0\n- api for decision rules",
            user: "U5FP8583B",
            ts: "1526496067.000374",
            team: "T5FL9A7H6"
        },
        {
            client_msg_id: "101c1293-c166-42f6-83ae-4a3320e66904",
            type: "message",
            text: "- eapy support bugs\n- endpoints for blueprints api 2.0\n- api for decision rules",
            user: "U5FP8583B",
            ts: "1526496067.000374",
            team: "T5FL9A7H6"
        },
        {
            client_msg_id: "101c1293-c166-42f6-83ae-4a3320e66904",
            type: "message",
            text: "- eapy support bugs\n- endpoints for blueprints api 2.0\n- api for decision rules",
            user: "U5FP8583B",
            ts: "1526496067.000374",
            team: "T5FL9A7H6"
        },
        {
            client_msg_id: "101c1293-c166-42f6-83ae-4a3320e66904",
            type: "message",
            text: "- eapy support bugs\n- endpoints for blueprints api 2.0\n- api for decision rules",
            user: "U5FP8583B",
            ts: "1526496067.000374",
            team: "T5FL9A7H6"
        },
        {
            client_msg_id: "101c1293-c166-42f6-83ae-4a3320e66904",
            type: "message",
            text: "- eapy support bugs\n- endpoints for blueprints api 2.0\n- api for decision rules",
            user: "U5FP8583B",
            ts: "1526496067.000374",
            team: "T5FL9A7H6"
        },
        {
            client_msg_id: "101c1293-c166-42f6-83ae-4a3320e66904",
            type: "message",
            text: "- eapy support bugs\n- endpoints for blueprints api 2.0\n- api for decision rules",
            user: "U5FP8583B",
            ts: "1526496067.000374",
            team: "T5FL9A7H6"
        },
        {
            client_msg_id: "101c1293-c166-42f6-83ae-4a3320e66904",
            type: "message",
            text: "- eapy support bugs\n- endpoints for blueprints api 2.0\n- api for decision rules",
            user: "U5FP8583B",
            ts: "1526496067.000374",
            team: "T5FL9A7H6"
        },
        {
            client_msg_id: "101c1293-c166-42f6-83ae-4a3320e66904",
            type: "message",
            text: "- eapy support bugs\n- endpoints for blueprints api 2.0\n- api for decision rules",
            user: "U5FP8583B",
            ts: "1526496067.000374",
            team: "T5FL9A7H6"
        },
        {
            client_msg_id: "101c1293-c166-42f6-83ae-4a3320e66904",
            type: "message",
            text: "- eapy support bugs\n- endpoints for blueprints api 2.0\n- api for decision rules",
            user: "U5FP8583B",
            ts: "1526496067.000374",
            team: "T5FL9A7H6"
        }
    ];

    return (
        <View style={styles.viewStyle}>
            {/*{errorMessage ? <Text>{errorMessage}</Text> : null}*/}
            <Timeline 
                data={testData}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        marginHorizontal: 15,
        marginTop: 15
    }
})

export default HomeScreen;