import axios from 'axios';
import { SET_MESSAGES } from '../types';
import { endpoint, token, channel } from '../../constants';


const mapMessages = (messages) => {

    const splitMessageProject = (text, message_project) => {
        let newMessage = '';

        if (message_project == 'message') {
            newMessage = text.split('[')[1].split(']')[1];

        } else if (message_project == 'project') {
            newMessage = text.split('[')[1].split(']')[0];
        }
        return newMessage;
    };

    const joinMessages = (messages) => {
        let joinedMessages = messages;

        for (var i = 0; i < joinedMessages.length; i++) {
            // Se nao tiver projeto:
            if (joinedMessages[i].text[0] != '[') {

                joinedMessages[i+1].text+=`\n${joinedMessages[i]}`;
                joinedMessages.splice(i, 1);
            }
        }
        return joinedMessages;
    };

    const timestampToDate = (timestamp) => {
        var tempDate = new Date(timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = tempDate.getFullYear();
        var month = months[tempDate.getMonth()];
        var date = tempDate.getDate();
        var hour = tempDate.getHours();
        var min = tempDate.getMinutes()
        return (date + ' ' + month + ' ' + year + '  ' + hour + 'h' + min);
    };
    
    mappedMessages = [];
    joinMessages(messages).forEach(tweet => {
        mappedMessages.push(
            {
                name: tweet.user,
                message: splitMessageProject(tweet.text, 'message'),
                project: splitMessageProject(tweet.text, 'project'),
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