import axios from 'axios';
import { SET_MESSAGES } from '../types';
import { endpoint, token, channel } from '../../constants';

const mapMessages = (messages) => {
    mappedMessages = [];

    messages.forEach(tweet => {
        let tweetMessage = tweet.text.includes('[') ?
                            tweet.text.split('[')[1].split(']')[1] :
                            tweet.text;

        let tweetProject = tweet.text.includes('[') ? 
                            tweet.text.split('[')[1].split(']')[0] :
                            '';
        mappedMessages.push(
            {
                name: tweet.user,
                message: tweetMessage,
                project: tweetProject,
                date: tweet.ts       // ALTERAR!!!
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