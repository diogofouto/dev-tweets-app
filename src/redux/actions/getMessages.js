import axios from 'axios';
import { SET_MESSAGES } from '../types';
import { endpoint, token, channel } from '../../constants';

const mapMessages = (messages) => {
    mappedMessages = [];

    messages.forEach(item => {
        mappedMessages.push(
            {
                name: item.user,
                message: item.text,
                project: item.team,  // ALTERAR!!!!
                date: item.ts       // ALTERAR!!!
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