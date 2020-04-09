// 사용자의 이름을 입력받기 위한 Presenter
import React from 'react';
import styled, { keyframes } from "styled-components";
import PropTypes from 'prop-types';

// 애니메이션 효과 추가 (흐릿한 화면에서 선명해 지는)
const fadeAni = keyframes`
  from {
            opacity: 0;
  }
  to {
            opacity: 1;
  }
`;

const Form = styled.form`
  animation: ${fadeAni} 2s linear;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
`;

const Text = styled.span`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  all: unset;
  border-bottom: 2px solid #fff;
  text-align: center;
`;

// value(입력 내용), handleChange(입력창에 글 수정 및 입력가능), handleSubmit(Enter 눌렀을 때 동작)
const NamePresenter = ({ value, handleChange, handleSubmit }) => (
    <Form onSubmit={handleSubmit}>
        <Text>Hello, what's your name?</Text>
        <Input value={value} onChange={handleChange} />
    </Form>
);

NamePresenter.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default NamePresenter;