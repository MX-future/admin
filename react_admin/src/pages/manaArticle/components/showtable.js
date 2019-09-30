//表格组件

import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { Table, Divider, Button, Spin } from 'antd';
import { actionCreators } from './store/index';
import ShowModal from './showmodal';
import { Link } from "react-router-dom";

let curr_id;  //点击删除时，传递给showmodal一个当前文章id值

class ShowTable extends Component {
    componentDidMount() {
        //避免重复请求
        let judge = this.props.data.length;
        if(judge === 0){
            this.props.handleGetData();
        }
    }

    render() {

        const { data, showModal, spinning, toEdit } = this.props;
        const columns = [
            {
                title: 'Title',
                dataIndex: 'title'
            },
            {
                title: 'Update Time',
                dataIndex: 'time'
            },
            {
                title: 'Action',
                render: (index) => (
                    <span>
                        <Link to='/admin/article/edit'><Button size='small' onClick={()=>toEdit(index)}>编辑</Button></Link>
                        <Divider type='vertical' />
                        <Button type='danger'
                                size='small'
                                onClick={()=>showModal(index._id)}>删除</Button>
                    </span>
                    ),
                },
            ];


        return (
            <Fragment>
                <Spin spinning={spinning} size="large" tip='加载中'>
                    <Table columns={columns}
                           rowKey='_id'
                           pagination={{pageSize: 12}}
                           dataSource={data} />
                    <ShowModal curr_id={curr_id}></ShowModal>
                </Spin>


            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        totalPage: state.getIn(['showtable','totalPage']),
        data: state.getIn(['showtable','data']).toJS(),
        spinning: state.getIn(['showtable','spinning'])   //是否显示加载中
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //获取数据
        handleGetData(){
            dispatch(actionCreators.getData());
        },
        //显示对话框
        showModal(id){
            curr_id = id;
            dispatch(actionCreators.showModal());
        },
        //跳转至编辑页面传递数据
        toEdit(data){
            dispatch(actionCreators.setEditData(data));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowTable);