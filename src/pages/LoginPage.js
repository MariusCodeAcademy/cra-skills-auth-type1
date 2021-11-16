import { useRef } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { useAuthCtx } from '../store/AuthContext';
import { loginUser } from '../utils/fetch';

const Title = styled.h1`
  font-size: 3rem;
  font-weight: normal;
`;

const Form = styled.form`
  padding: 1rem;
  border: 1px solid #000;
  border-radius: 5px;
  display: inline-block;
`;
const Input = styled.input`
  font-size: 1rem;
  padding: 0.3rem 1rem;
  display: block;
  margin-bottom: 1rem;
`;
const Button = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: white;
  font-size: 1rem;
`;

function LoginPage() {
  const { login } = useAuthCtx();
  const emailRef = useRef();
  const passRef = useRef();
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(' emailRef:', emailRef.current.value);
    const email = emailRef.current.value;
    const password = passRef.current.value;
    if (!email || !password) return;
    const dataBackFromServer = await loginUser(email, password);
    if (dataBackFromServer.err) {
      return toast.error(dataBackFromServer.err);
    }
    if (dataBackFromServer.msg) {
      login(dataBackFromServer.token);
    }
  };
  return (
    <main>
      <Title>Login</Title>
      <Form onSubmit={handleLogin}>
        <Input ref={emailRef} type='text' placeholder='Enter your login' />
        <Input ref={passRef} type='password' placeholder='Enter your pass' />
        <Button>Login</Button>
      </Form>
    </main>
  );
}

export default LoginPage;
