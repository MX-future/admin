//showtable
import { actionTypes } from './index';
import { fromJS } from "immutable";

const defaultState = fromJS({
    totalPage: 0,   //总数
    data: [],       //文章数据
    ModalText: '是否删除当前文章?',
    visible: false,   //控制对话框的显示
    confirmLoading: false,  //控制对话框中单击确定后的加载状态
    spinning: true,    //控制进入到管理页面时的全局加载状态
    dataToEdit: [],     //传递给编辑页面的当前文章数据
    updateSuccess: false  //是否保存成功
});

export default (state = defaultState,action) => {
    switch(action.type){

        case actionTypes.GET_DATA:
            //使用merge方法同时设置多个值(immutable方法)
            return state.merge({
                totalPage: action.totalPage,
                data: fromJS(action.data)
            })

        case actionTypes.SHOW_MODAL:
            return state.set('visible',true);

        case actionTypes.CLOSE_MODAL:
            return state.set('visible',false);

        case actionTypes.SHOW_LOADING:
            return state.set('confirmLoading',true);

        case actionTypes.CLOSE_LOADING:
            return state.set('confirmLoading',false);

        case actionTypes.CLOSE_SPIN:
            return state.set('spinning',false);

        case actionTypes.SET_EDITDATA:
            return state.set('dataToEdit',fromJS(action.data));

        case actionTypes.UPDATE_SUCCESS:
            return state.set('updateSuccess',true);


        default:
            return state
    }
}