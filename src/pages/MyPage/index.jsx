import React from 'react';
import Footer from '../../components/Footer';
import * as s from './style';
import {DefaultProfile, MyDatasLine} from "./style";

const MyPage = () => {
    const userName = "강민지"
    const serialCode = "ABCDE"
    const userID = "rkdalswl718"

    return (
        <s.Container>
            <s.Header>
                <s.stLogo />
                <s.LogoText>DIDIM</s.LogoText>
            </s.Header>
            <DefaultProfile />
            <s.UserName>{userName}님</s.UserName>
            <s.MyData><s.MyDataText>내 정보</s.MyDataText></s.MyData>
            <s.MyDatas>
                <s.MyDatasCenterBox>
                    <s.MyDatasText>시리얼 코드: {serialCode}</s.MyDatasText>
                    <s.MyDatasLine/>
                    <s.MyDatasText>아이디: {userID}</s.MyDatasText>
                </s.MyDatasCenterBox>
            </s.MyDatas>
            <s.StyledButton>로그아웃</s.StyledButton>
            <Footer/>
        </s.Container>
    )
}

export default MyPage