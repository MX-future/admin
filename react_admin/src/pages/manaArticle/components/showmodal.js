//提示框组件

import React, { Component } from 'react';
import { Modal } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from './store/index';

class ShowModal extends Component {

    // handleOk = () => {
    //     this.setState({
    //         ModalText: '正在删除......',
    //         confirmLoading: true,
    //     });
    //     setTimeout(() => {
    //         this.setState({
    //             visible: false,
    //             confirmLoading: false,
    //         });
    //     }, 2000);
    // };


    render() {
        const { visible, confirmLoading, ModalText, handleCancel,handleOk, curr_id } = this.props;
        return (
            <div>
                <Modal
                    title="警告 ⚠️"
                    visible={visible}
                    onOk={()=>handleOk(curr_id)}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >
                    <p>{ModalText}</p>
                </Modal>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        ModalText: state.getIn(['showtable','ModalText']),
        visible: state.getIn(['showtable','visible']),
        confirmLoading: state.getIn(['showtable','confirmLoading'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleOk(curr_id){
            dispatch(actionCreators.confirmModal(curr_id));
        },
        handleCancel(){
            dispatch(actionCreators.closeModal());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowModal);