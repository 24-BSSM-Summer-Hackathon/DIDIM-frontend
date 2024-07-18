import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0 24px;
  font-family: 'Pretendard-Regular', sans-serif;
  height: 100vh;
  overflow-y: auto;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 24px;
  text-align: center;
`;

export const QuestionContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
  text-align: center; /* Add this line for center alignment */
`;

export const Question = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
`;

export const AnswerButton = styled.button`
  background-color: ${props => (props.selected ? '#5A51FF' : '#fff')};
  color: ${props => (props.selected ? '#fff' : '#5A51FF')};
  border: 2px solid #5A51FF;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
  display: inline-block; /* Add this line for inline display */
  text-align: center;

  &:hover {
    background-color: ${props => (props.selected ? '#4a41d4' : '#eae8ff')};
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseButton = styled.button`
  background-color: #5A51FF;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #4a41d4;
  }
`;

export const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  position: fixed;
  bottom: 20px; /* Adjust the value as needed */
  left: 50%;
  transform: translateX(-50%);
  padding: 0 20px;
  box-sizing: border-box;
`;

export const NavButton = styled.button`
  background-color: #5A51FF;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #4a41d4;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
