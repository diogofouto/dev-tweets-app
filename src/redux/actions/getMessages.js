import axios from 'axios';
import { SET_MESSAGES } from '../types';

const testData =  [
    {
        profilePhoto: 'https://cdn.shopify.com/s/files/1/0882/5118/products/Rick-and-Morty-Ricks-Face-Enamel-Pin-2186592_1024x1024.jpg?v=1481411776',
        name: 'Rick Sanchez',
        message: 'Listen, Morty:\nI hate to break it to you, but what people call love is just a chemical reaction that compels animals to breed. It hits hard, Morty, then it slowly fades, leaving you stranded in a failing marriage. I did it. Your parents are gonna do it. Break the cycle, Morty. Rise above. Focus on science.',
        project: 'Keep Summer safe',
        date: '02/12/2013'
    },
    {
        profilePhoto: 'https://cdn.imgbin.com/24/1/23/imgbin-pocket-mortys-morty-smith-rick-sanchez-facebook-drawing-rick-and-morty-man-JTN7yP8Kxvnh27rDCVcuLWmaF.jpg',
        name: 'Morty Sanchez',
        message: 'Nobody exists on purpose.\nNobody belongs anywhere, everybody\'s gonna die. Come watch TV.',
        project: 'Keep Summer safe',
        date: '02/12/2013'
    },
    {
        profilePhoto: 'https://cdn.shopify.com/s/files/1/0882/5118/products/Rick-and-Morty-Ricks-Face-Enamel-Pin-2186592_1024x1024.jpg?v=1481411776',
        name: 'Rick Sanchez',
        message: 'Listen, Morty:\nI hate to break it to you, but what people call love is just a chemical reaction that compels animals to breed. It hits hard, Morty, then it slowly fades, leaving you stranded in a failing marriage. I did it. Your parents are gonna do it. Break the cycle, Morty. Rise above. Focus on science.',
        project: 'Keep Summer safe',
        date: '02/12/2013'
    },
    {
        profilePhoto: 'https://cdn.imgbin.com/24/1/23/imgbin-pocket-mortys-morty-smith-rick-sanchez-facebook-drawing-rick-and-morty-man-JTN7yP8Kxvnh27rDCVcuLWmaF.jpg',
        name: 'Morty Sanchez',
        message: 'Nobody exists on purpose.\nNobody belongs anywhere, everybody\'s gonna die. Come watch TV.',
        project: 'Keep Summer safe',
        date: '02/12/2013'
    }
];

const getMessages = () => {
    return function(dispatch) {
        dispatch({
            type: SET_MESSAGES,
            messages: testData
        });
    }
};

export default getMessages;