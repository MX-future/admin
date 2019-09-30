//编辑页面
import React,{ Component, Fragment } from 'react';
import EditPanel from '../../../common/editpanel/index';
import { Button, message } from 'antd';
import { ButtonWrapper } from './style';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { actionCreators } from './store/index';


const success = () => {
    message.success('更改成功');
};

class EditArticle extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.updateSuccess){
            success();
        }
    }

    render() {
        const { title, inputValue, handleUpdate, dataToEdit } = this.props;

        //重定向
        if(dataToEdit.length === 0){
            return <Redirect to='/admin/article' />
        }else{
            return (
                <Fragment>
                    <EditPanel></EditPanel>
                    <ButtonWrapper>
                        <Button className='btn' type='primary' onClick={()=>handleUpdate(title,inputValue, dataToEdit)}>保存更改</Button>
                        <Link to='/admin/article'><Button className='btn'>取消</Button></Link>
                    </ButtonWrapper>
                </Fragment>

            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.getIn(['editpanel','title']),
        inputValue: state.getIn(['editpanel','inputValue']),
        dataToEdit: state.getIn(['showtable','dataToEdit']).toJS(),
        updateSuccess: state.getIn(['showtable','updateSuccess'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //更改数据
        handleUpdate(title,inputValue,dataToEdit){
            dispatch(actionCreators.updateData(title,inputValue,dataToEdit));
        },

    }
}




export default connect(mapStateToProps,mapDispatchToProps)(EditArticle);