import React, { Component } from 'react';
import { HeaderWrapper, HeaderLogo,HeaderAvatar, HeaderTime } from './style';
import imgUrl from '../.././static/avatar.png';
import { Link } from 'react-router-dom';


class MxHeader extends Component {

    constructor(props){
        super(props);
        this.state = {
            curr_time: new Date().toLocaleString()
        }
    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return
        }
    }

        componentDidMount() {
        this.getTime();
    }

    render() {
        return (
            <HeaderWrapper>
                <Link to='/admin'>
                    <HeaderLogo>MX巴赫</HeaderLogo>
                </Link>
                <HeaderAvatar>
                    <img alt='...' src={imgUrl} />
                    <Link to='/'><span>退出</span></Link>
                </HeaderAvatar>
                <HeaderTime>
                    <h3>当前时间: {this.state.curr_time}</h3>
                </HeaderTime>
            </HeaderWrapper>
        );
    }

    getTime(){
        setInterval(() => {
            this.setState({
                curr_time: new Date().toLocaleString()
            })
        },1000)
    }

}



export default MxHeader;