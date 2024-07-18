import React, { useState } from 'react';
import Modal from 'react-modal';
import * as s from './style';

const questions = [
  "어떤 일이 언제 일어났는지 기억하지 못할 때가 있다.",
  "며칠 전에 들었던 이야기를 잊는다.",
  "반복되는 일상 생활에 변화가 생겼을 때 금방 적응하기가 힘들다.",
  "본인에게 중요한 사항을 잊을 때가 있다. (예를 들어 배우자 생일, 결혼 기념일 등)",
  "어떤 일을 하고도 잊어버려 다시 반복한 적이 있다.",
  "약속을 하고 잊은 때가 있다.",
  "이야기 도중 방금 자기가 무슨 이야기를 하고 있었는지를 잊을 때가 있다.",
  "약 먹는 시간을 놓치기도 한다.",
  "하고 싶은 말이나 표현이 금방 떠오르지 않는다.",
  "물건 이름이 금방 생각나지 않는다.",
];

const Test = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const getResultMessage = () => {
    const yesCount = answers.filter(answer => answer === 'yes').length;
    if (yesCount >= 5) {
      return `치매 가능성이 있습니다. ${yesCount}개의 질문에 "예"라고 답했습니다. 전문가와 상담하십시오.`;
    } else {
      return `정상 범위입니다. ${yesCount}개의 질문에 "예"라고 답했습니다. 지속적인 관리를 권장합니다.`;
    }
  };

  return (
    <s.Container>
      <s.Title>치매 체크리스트</s.Title>
      <s.Description>최근 6개월 간의 해당 사항에 동그라미 해 주세요.</s.Description>
      <s.QuestionContainer>
        <s.Question>{questions[currentQuestionIndex]}</s.Question>
        <s.AnswerButtons>
          <s.AnswerButton onClick={() => handleAnswer('yes')}>예</s.AnswerButton>
          <s.AnswerButton onClick={() => handleAnswer('no')}>아니오</s.AnswerButton>
        </s.AnswerButtons>
      </s.QuestionContainer>
      <s.NavButtons>
        <s.NavButton
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
          disabled={currentQuestionIndex === 0}
        >
          이전
        </s.NavButton>
        <s.NavButton
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          다음
        </s.NavButton>
      </s.NavButtons>
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} style={s.customStyles}>
        <s.ModalContent>
          <h2>결과</h2>
          <p>{getResultMessage()}</p>
          <s.CloseButton onClick={handleCloseModal}>닫기</s.CloseButton>
        </s.ModalContent>
      </Modal>
    </s.Container>
  );
};

export default Test;
