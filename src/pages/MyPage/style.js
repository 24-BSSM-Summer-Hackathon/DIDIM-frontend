import styled, { css } from 'styled-components';
import Logo from "../../assets/Logo";
import DefaultImage from "../../assets/mypage/defaultProfile.png"
import {text} from "../start/style";

export const Container = styled.div`
    position: relative;
    
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #F9F9F9;
`

export const stLogo = styled(Logo)`
    width: 25.06px;
    height: 23.53px;
`

export const Header = styled.header`
    position: relative;
    top: 46.33px;
    left: 25.75px;
    width: 80.25px;
    height: 23.53px;
    //background-color: #2f71d3;
`

export const LogoText = styled.p`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    color: #5A51FF;
    font-size: 17px;
    font-family: Pretendard-Regular;
`

export const DefaultProfile = styled.div`
    width: 80px;
    height: 80px;
    
    position: relative;
    
    top: 98px;
    left: 50%;
    transform: translateX(-50%);
    
    background-image: url(${DefaultImage});
`

export const UserName = styled.p`
    width: 100vw;
    height: 80px;
    
    text-align: center;
    font-family: Pretendard-Regular;

    position: relative;

    top: 113px;
`

export const MyData = styled.div`
    font-family: Pretendard-Regular;
    position: absolute;
    left: 50%;
    top: 283px;
    transform: translateX(-50%);
    
    background-color: #FFF;
    border-radius: 10px;
    
    width: 320px;
    height: 40px;
`

export const MyDataText = styled.p`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
`

export const MyDatas = styled.div`
    position: absolute;
    top: 330px;
    left: 50%;
    transform: translateX(-50%);
    
    background-color: #FFF;
    border-radius: 10px;
    
    width: 320px;
    height: 94px;
`

export const MyDatasText = styled.p`
    position: relative;
    font-family: Pretendard-Regular;
    padding: 10px 0;
    left: 16px;
    
    color: #7A7A7A7A;
`

export const MyDatasLine = styled.br`
    position: relative;
    left: 16px;
    width: 288px;
    height: 1px;
    border: 1px solid #F3F3F3F3;
`