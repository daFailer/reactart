import { useState } from 'react';

import { styled } from 'styled-components';

import Button from './Button';

import CustomInput from './Input';

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const AuthInputsContainer = styled.div`
  width: 100%;
  max-width: 28rem;
  padding: 2rem;
  margin: 0 auto;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background: linear-gradient(180deg, #474232 0%, #28271c 100%);
  color: white;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  .text-button {
    color: #f0b322;
    border: none;
  }

  .text-button:hover {
    color: #f0920e;
  }
  
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
      return;
    }

    setEnteredPassword(value);
    
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <AuthInputsContainer id="auth-inputs">
      <ControlContainer>
        <CustomInput
          label='Email'
          invalid={emailNotValid}
          type='email'
          onChange={(event) => handleInputChange('email', event.target.value)}
        />
        <CustomInput
          label='Password'
          invalid={passwordNotValid}
          type='password'
          onChange={(event) =>
            handleInputChange('password', event.target.value)
          }
        />
      </ControlContainer>
      <Actions>
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </Actions>
    </AuthInputsContainer>
  );
}
