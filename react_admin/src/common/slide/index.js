import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

class MxSlide extends Component {

    render() {
        return (
            <div style={{ width: '100%'}}>
                <Menu
                    mode="inline"
                    theme="dark">

                    <Menu.Item key="1" style={{margin:0}}>
                        <Link to='/admin/write'>
                            <Icon type="form" />
                            <span>写文章</span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="2">
                        <Link to='/admin/article'>
                            <Icon type="database" />
                            <span>管理文章</span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="3">
                        <Link to='/admin/mx'>
                            <Icon type="solution" />
                            <span>管理主页信息</span>
                        </Link>
                    </Menu.Item>

                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="more" />
                                <span>更多</span>
                            </span>
                        }>

                        <Menu.Item key="5">
                            <Icon type="ellipsis" />
                            预留
                        </Menu.Item>
                    </SubMenu>

                </Menu>
            </div>
        );
    }
}

export default MxSlide;