//login style
import styled from 'styled-components';
import imgUrl from '../../static/login.jpeg';

export const PageWrapper = styled.div`

    width: 100%;
    height: 100vh;
    padding-top: 200px;
    background: url(${imgUrl}) no-repeat;
    text-align: center;

`;

export const LoginWrapper = styled.div`

    width: 500px;
    height: 400px;
    margin: 0px auto;
    
    .login-form{
        width: 180px;
        margin: 0 auto;
        text-align: center;
    }
    
    .login-form-button{
        width: 180px;
    }
    h1{
        font-size: 35px;
    }

`;