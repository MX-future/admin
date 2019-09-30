import styled from 'styled-components';

//容器
export const HeaderWrapper = styled.div`

    width: 100%;
    height: 100%;
    background: #7BBFEA;

`;

//logo
export const HeaderLogo = styled.div`

    float: left;
    margin-left: 50px;
    line-height: 64px;
    font-size: 24px;
    cursor: pointer;
    color: white;

`;

//头像
export const HeaderAvatar = styled.div`

    float: right;
    height: 64px;
    width: 94px;
    margin-right: 40px;
    text-align: center;
    
    img{
        width: 48px;
        height: 48px;
        border-radius: 50%;
    }
    span{
        margin-left: 15px;
        font-size: 12px;
        font-weight: bold;
        cursor: pointer;
        color: white;
    }

`;

//当前时间
export const HeaderTime = styled.div`

    width: 300px;
    height: 64px;
    line-height: 64px;
    margin: 0 auto;
    text-align: center;

`;