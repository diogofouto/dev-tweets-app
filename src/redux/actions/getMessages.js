import axios from 'axios';
import { SET_MESSAGES } from '../types';
import { endpoint, token, channel } from '../../constants';


const mapMessages = (messages) => {
    mappedMessages = [];

    const splitMessage = (text, message_project) => {
        let newMessage = '';

        if (message_project == 'message') {
            newMessage = text.includes('[') ? text.split('[')[1].split(']')[1] : text;

        } else if (message_project == 'project') {
            newMessage = text.includes('[') ? text.split('[')[1].split(']')[0] : text;
        }
        return newMessage;
    };

    const timestampToDate = (timestamp) => {
        var tempDate = new Date(timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = tempDate.getFullYear();
        var month = months[tempDate.getMonth()];
        var date = tempDate.getDate();
        var hour = tempDate.getHours();
        var min = tempDate.getMinutes();
        var sec = tempDate.getSeconds();
        return (date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec);
    };

    messages.forEach(tweet => {
        mappedMessages.push(
            {
                name: tweet.user,
                message: splitMessage(tweet.text, 'message'),
                project: splitMessage(tweet.text, 'project'),
                date: timestampToDate(tweet.ts)
            });
    });
    return mappedMessages;
}

const getMessages = () => {
    return function(dispatch) {
        axios.get(`${endpoint}/conversations.history?token=${token}&channel=${channel}`)
        .then(response => {
            dispatch({
                type: SET_MESSAGES,
                messages: mapMessages(response.data.messages)
            });   
        })
    }
};

export default getMessages;