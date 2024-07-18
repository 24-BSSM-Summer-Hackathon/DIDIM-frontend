import React, { useState } from 'react';
import * as s from './style';
import Modal from 'react-modal';

const Test = () => {
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
    "물건 이름이 금방 생각나지 않는다."
  ];

  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    // navigate('/main'); // Uncomment this line to navigate to the main page after closing the modal
  };

  const correctAnswers = answers.filter(answer => answer === 'yes').length;

  return (
    <s.Container>
      <s.Title>치매 체크리스트</s.Title>
      <s.Description>최근 6개월 간의 해당 사항에 동그라미 해 주세요.</s.Description>
      <s.QuestionContainer>
        <s.Question>{currentQuestion + 1}. {questions[currentQuestion]}</s.Question>
        <s.AnswerButton
          selected={answers[currentQuestion] === 'yes'}
          onClick={() => handleAnswerChange(currentQuestion, 'yes')}
        >
          예
        </s.AnswerButton>
        <s.AnswerButton
          selected={answers[currentQuestion] === 'no'}
          onClick={() => handleAnswerChange(currentQuestion, 'no')}
        >
          아니오
        </s.AnswerButton>
      </s.QuestionContainer>
      <s.NavButtons>
        <s.NavButton onClick={handlePrevQuestion} disabled={currentQuestion === 0}>
          이전
        </s.NavButton>
        <s.NavButton onClick={handleNextQuestion}>
          {currentQuestion < questions.length - 1 ? '다음' : '제출'}
        </s.NavButton>
      </s.NavButtons>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="결과"
      >
        <s.ModalContent>
          <h2>결과</h2>
          <p>총 {correctAnswers}개의 문항에 '예'라고 답했습니다.</p>
          <s.CloseButton onClick={closeModal}>닫기</s.CloseButton>
        </s.ModalContent>
      </Modal>
    </s.Container>
  );
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default Test;
