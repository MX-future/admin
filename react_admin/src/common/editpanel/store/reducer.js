//editpanel reducer
import { fromJS } from 'immutable';
import { actionTypes } from './index';

const defaultState = fromJS({
    modules : {
        toolbar: [
                [{ 'header': [1, 2, false] }],
                ['bold', 'italic', 'underline','strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                ['link', 'image'],
                ['clean']
            ],
        },
    formats: [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ],
    title: '',
    inputValue: ''
});

export default (state = defaultState,action) => {
    switch (action.type) {
        case actionTypes.TITLE_CHANGE:
            return state.set('title',action.value);

        case actionTypes.INPUT_CHANGE:
            return state.set('inputValue',action.value);

        case actionTypes.GET_EDITDATA:
            if(action.data.length !==0){
                let title = action.data.title;
                let content = action.data.content.toString();
                return state.merge({
                    title: title,
                    inputValue: content
                });
            }
            return state;

        default:
            return state;
    }
}