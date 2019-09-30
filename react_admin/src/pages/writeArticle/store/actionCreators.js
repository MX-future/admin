//writeArticle actionCreators

import { actionTypes } from './index';
import axios from 'axios';

const addSuceess = () => ({
    type: actionTypes.ADD_SUCCESS
})

export const addArticle = (title,time,inputValue) => {
    return (dispatch) => {

        axios.post('http://localhost:3000/add?title=' + title+ '&time='+ time+ '&content=' +inputValue)
            .then((res) => {
                dispatch(addSuceess());
            }).catch((err) => {
                console.log('请求add接口失败',err);
            })
    }
};

