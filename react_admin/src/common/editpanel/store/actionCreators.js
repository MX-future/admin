//editpanel actionCreators
import { actionTypes } from './index';

export const titleChange = (value) => ({
    type: actionTypes.TITLE_CHANGE,
    value: value
});

export const inputChange = (value) => ({
    type: actionTypes.INPUT_CHANGE,
    value: value
});

//将从管理页面传递过来的值填充到编辑器中
export const getEditData = (data) => ({
    type: actionTypes.GET_EDITDATA,
    data: data
});

