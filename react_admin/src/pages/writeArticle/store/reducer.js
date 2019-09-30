//writeArticle reducer
import { actionTypes } from './index';
import { fromJS } from "immutable";

const defaultState = fromJS({
    addSuccess: false    //是否保存成功
})

export default (state = defaultState,action) => {
    switch(action.type){
        case actionTypes.ADD_SUCCESS:
            return state.set('addSuccess',true);

        default:
            return state
    }
}