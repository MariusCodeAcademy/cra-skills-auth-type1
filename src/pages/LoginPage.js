import { useRef } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3rem;
  font-weight: normal;
`;

const Form = styled.form`
  padding: 1rem;
  border: 1px solid #000;
  display: inline-block;
`;
const Input = styled.input`
  font-size: 1rem;
  padding: 1rem;
`;

function LoginPage() {
  const emailRef = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(' emailRef:', emailRef.current.value);
  };
  return (
    <main>
      <Title>Login</Title>
      <Form onSubmit={handleLogin}>
        <Input ref={emailRef} type='text' placeholder='Enter your login' />
        <Input type='password' placeholder='Enter your pass' />
        <button>Login</button>
      </Form>
    </main>
  );
}

export default LoginPage;
