import { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
    const [tweets, setTweets] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const Url = 'https://slack.com/api/conversations.history?token=xoxp-185689347584-726880427282-733305714738-1daaf27eca432286449e044c203f1ca2&channel=CAKHTL1E3';

    const searchAPI = async () => {
        try {
            const response = await axios.get(Url);
            setTweets(response.data.messages);
        } catch (e) {
            setErrorMessage('Something went wrong. Please try again.');
        }
    };

    //useEffect corre apenas quando a app e' iniciada
    //evitando o reRendering quando fazemos pull to refresh
    useEffect(() => {
        searchAPI();
    }, []);

    return [searchAPI, tweets, errorMessage];
};