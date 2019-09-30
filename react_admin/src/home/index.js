//主结构

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

import MxHeader from '../common/header/index';
import MxSlide from '../common/slide/index'
import HomePage from "../pages/homepage/index";
import Write from "../pages/writeArticle/index";
import MaArTi from "../pages/manaArticle/index";
import MaMx from "../pages/manaMX/index";

const { Header, Content, Sider } = Layout;

class Home extends Component {

    render() {
        return (
            <Layout style={{height: '100vh',color: 'white'}}>

                <Header style={{margin: '0',padding: '0'}}>
                    <MxHeader></MxHeader>
                </Header>

                <Layout>
                    <Sider>
                        <MxSlide></MxSlide>
                    </Sider>
                    <Content style={{color: 'black'}}>
                        <Switch>
                            <Route path='/admin' exact component={HomePage}/>
                            <Route path='/admin/write' component={Write}/>
                            <Route path='/admin/article' component={MaArTi}/>
                            <Route path='/admin/mx' component={MaMx}/>
                        </Switch>
                    </Content>
                </Layout>

            </Layout>
        );

    }
}

export default Home;
