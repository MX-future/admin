//login actionCreators
import axios from 'axios';
import { actionTypes } from './index';

//更改登录状态
const ChangeLogin = () => ({
    type: actionTypes.CHANGE_LOGIN
});

export const AdminLogin = (adminName,password) => {
    return (dispatch) => {
        axios.post(`http://localhost:3000/login?adminName=${adminName}&password=${password}`)
            .then((res) => {
                //console.log(res.data);
                //登录成功
                if(res.data.status === 1){
                    dispatch(ChangeLogin());
                }
            }).catch((err) => {
                console.log('请求登录接口失败',err);
        });
    }
}