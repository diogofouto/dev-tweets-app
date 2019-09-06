import axios from 'axios';
import { SET_MESSAGES } from '../types';
import { endpoint, token, channel } from '../../constants';
import users from '../../assets/users';

const getTweetNameAndAvatar = (tempMessages) => {
    const {name, avatar} = users[tempMessages[0].user];
    return {name, avatar};
}

const getTweetDate = (tempMessages) => {
    const timestamp = tempMessages[0].ts;
    var tempDate = new Date(timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = tempDate.getFullYear();
    var month = months[tempDate.getMonth()];
    var date = tempDate.getDate();
    var hour = tempDate.getHours();
    var min = tempDate.getMinutes()
    return (date + ' ' + month + ' ' + year + '  ' + hour + 'h' + min);
};

const hasProjectTitle = (message) => {
    return message.text[0] == '[';
}

const getTweetMessage = (tempMessages) => {
    let tweetMessage = '';

    tempMessages.reverse().forEach(tempMessage => {
        tweetMessage += tempMessage.text;
    });
    return tweetMessage;
}

const getTweetProject = (message) => {
    return message.split('[')[1].split(']')[0];
}

const getTweetMessageAndProject = (tempMessages) => {
    let finalMessage = getTweetMessage(tempMessages);
    const project = getTweetProject(finalMessage);
    finalMessage = finalMessage.replace(`[${project}]`, '');
    return {finalMessage, project};
}

const processTweet = (tempMessages) => {
    const {name, avatar} = getTweetNameAndAvatar(tempMessages);
    const {finalMessage, project} = getTweetMessageAndProject(tempMessages);
    const tweet = {
        name: name,
        message: finalMessage,
        date: getTweetDate(tempMessages),
        project: project,
        avatar: avatar
    };
    return tweet;
} 

const getDevTweets = (messages) => {
    let tempMessages = [];
    let tweets = [];

    messages.forEach(message => {
        tempMessages.push(message);
        const hasTitle = hasProjectTitle(message);
        if (hasTitle) {
            const tweet = processTweet(tempMessages);
            tweets.push(tweet);
            tempMessages = [];
        }
    });
    return tweets;
}

const getMessages = () => {
    return function(dispatch) {
        axios.get(`${endpoint}/conversations.history?token=${token}&channel=${channel}`)
        .then(response => {
            dispatch({
                type: SET_MESSAGES,
                messages: getDevTweets(response.data.messages)
            });   
        })
    }
};

export default getMessages;