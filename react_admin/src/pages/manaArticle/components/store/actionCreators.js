//showtable
import axios from 'axios';
import { actionTypes } from './index';

//使用服务器返回的数据初始化redux数据
const changeData = (num,data) => ({
    type: actionTypes.GET_DATA,
    totalPage: num,
    data: data
});

//关闭管理页面的全局加载
const closeSpin = () => ({
    type: actionTypes.CLOSE_SPIN
});

//confirmLoading,关闭点击确定后的操作加载
const closeLoading = () => ({
    type: actionTypes.CLOSE_LOADING
});

//confirmLoading,显示点击确定后的操作加载
const showLoading = () => ({
    type: actionTypes.SHOW_LOADING
});

//更改成功，触发全局提示
const succUpdate = () => ({
    type: actionTypes.UPDATE_SUCCESS
})




//从服务器获取所有数据
export const getData = () => {
    return (dispatch) => {
        axios.get('http://localhost:3000/data').then((res => {
            let num = res.data.totalPage;
            let data = res.data.data;

            dispatch(changeData(num,data));
            //数据加载完成后关闭管理页面的加载状态
            dispatch(closeSpin());
        })).catch((err) => {
            console.log('获取文章失败')
        })
    }
}

//点击删除时,显示提示框
export const showModal = () => ({
    type: actionTypes.SHOW_MODAL
});

//点击取消,关闭提示框
export const closeModal = () => ({
    type: actionTypes.CLOSE_MODAL
});

//点击确定,删除文章
export const confirmModal = (id) => {
    return (dispatch) => {
        dispatch(showLoading());
        axios.post('http://localhost:3000/delete?id='+id).then((res) => {
            let status = res.data.status;
            if(status === 1){
                //删除成功，关闭加载框和对话框,并且更新data
                dispatch(closeLoading());
                dispatch(closeModal());
                dispatch(getData());
            }
        }).catch((err) => {
            console.log('请求delete接口失败',err)
        })
    }
}

//点击编辑，传递数据给编辑页面
export const setEditData = (data) => ({
    type: actionTypes.SET_EDITDATA,
    data: data
})


//点击编辑页面的保存更新按钮后 更新数据
export const updateData = (title,inputValue,data) => {
    return (dispatch) => {
        let id = data._id;
        let time = new Date().toLocaleString();
        axios.post(`http://localhost:3000/update?id=${id}&title=${title}&time=${time}&content=${inputValue}`)
            .then((res) => {
                console.log(res.data);
                //保存成功
                dispatch(succUpdate());
            }).catch((err) => {
            console.log('更新数据失败',err);
        })
    }

}
