import React, { Component, Fragment } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { connect } from 'react-redux';
import { actionCreators } from './store/index';
import { Input } from 'antd';

class EditPanel extends Component {

    componentDidMount() {
        //判断是否是dataToEdit是否为空，不为空则获取它将它填充至编辑器中
        let judge = this.props.dataToEdit;
        if(judge !== ''){
            this.props.handleGetEditData(judge);
        }
    }

    render() {

        const { title, handleTitleChange , inputValue, handleInputChange, modules, formats } = this.props;

        return (
            <Fragment>
                <Input value={title}
                       onChange={handleTitleChange}
                       style={{height: '40px',margin: '10px 0'}}
                       placeholder='此处输入标题' />

                <ReactQuill value={inputValue}
                            onChange={handleInputChange}
                            modules={modules}
                            formats={formats}
                            style={{height: '650px'}}/>
            </Fragment>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        //immutable需要转为js对象类型
        modules: state.getIn(['editpanel','modules']).toJS(),
        formats: state.getIn(['editpanel','formats']).toJS(),
        //非对象不用转
        title: state.getIn(['editpanel','title']),
        inputValue: state.getIn(['editpanel','inputValue']),
        dataToEdit: state.getIn(['showtable','dataToEdit']).toJS()
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //让输入数据与redux中数据同步
        handleTitleChange(e){
            dispatch(actionCreators.titleChange(e.target.value));
        },
        //让输入数据与redux中数据同步，value值默认传递输入的值，名字可随便取
        handleInputChange(value){
            dispatch(actionCreators.inputChange(value))
        },
        //获取从管理文章页面传递过来的当前文章数据
        handleGetEditData(data){
            dispatch(actionCreators.getEditData(data));
        }


    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditPanel);