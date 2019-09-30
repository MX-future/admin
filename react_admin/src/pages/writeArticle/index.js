import React, { Component, Fragment } from 'react';
import EditPanel from '../../common/editpanel/index';
import { EditWrapper, ButtonWrapper } from './style';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Button, message } from 'antd';
import { actionCreators } from './store/index';
import { Link } from 'react-router-dom';

const success = () => {
    message.success('添加成功');
};

class Write extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.addSuccess){
            success();
        }
    }

    render() {
        const { title, inputValue,handleSave } = this.props;


        //下面Button中事件传参调用记得使用箭头函数或者bind方法绑定this，否则无法正常执行
        return (
            <Fragment>
                <EditWrapper>
                    <EditPanel></EditPanel>
                </EditWrapper>
                <ButtonWrapper>
                    <Button className='btn' type='primary' onClick={()=>handleSave(title,inputValue)}>保存</Button>
                    <Button className='btn' type='primary'>预览</Button>
                    <Link to='/admin'><Button className='btn'>取消</Button></Link>
                </ButtonWrapper>

            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.getIn(['editpanel','title']),
        inputValue: state.getIn(['editpanel','inputValue']),
        addSuccess: state.getIn(['write','addSuccess'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //保存，添加进数据库
        handleSave(title,inputValue){
            //console.log(title,inputValue);
            //获取当前时间
            let time = new Date().toLocaleString();
            dispatch(actionCreators.addArticle(title,time,inputValue));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Write);