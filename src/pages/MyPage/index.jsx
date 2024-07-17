import React from 'react';
import Footer from '../../components/Footer';
import * as s from './style';
import {DefaultProfile, MyDatasLine} from "./style";

const MyPage = () => {
    const userName = "강민지"
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
                <s.MyDatasText>시리얼 코드</s.MyDatasText>
                {/*<s.MyDatasLine />*/}
                <s.MyDatasText>시리얼 코드</s.MyDatasText>
            </s.MyDatas>
            <Footer />
        </s.Container>
    )
}

export default MyPage