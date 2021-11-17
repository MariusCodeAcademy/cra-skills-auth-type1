import { useState } from 'react';
import { Form, Input, Button } from '../pages/LoginPage';
import { registerUser } from '../utils/fetch';
import { toast } from 'react-hot-toast';

function doPassMatch(p1, p2) {
  return p1 === p2;
}
function RegisterForm() {
  const [formInputs, setFormInputs] = useState({
    email: '',
    pass: '',
    repeatPass: '',
  });
  const handleInput = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleRegister = async (e) => {
    const { email, pass, repeatPass } = formInputs;
    e.preventDefault();
    console.log('do password match');
    // console.log('RegisterForm.js: formInputs ===', formInputs);
    if (!doPassMatch(pass, repeatPass)) {
      console.log('no match');
      return;
    }
    const dataBack = await registerUser(email, pass);
    console.log('RegisterForm.js: dataBack ===', dataBack);
    if (dataBack.affectedRows === 1) {
      toast.success(`Success ${email} registered`);
      // redirect to login
      // fill login with email
    }
  };

  return (
    <Form onSubmit={handleRegister}>
      <Input
        value={formInputs.email}
        onChange={handleInput}
        name='email'
        type='text'
        placeholder='Login'
      />
      <Input
        value={formInputs.pass}
        onChange={handleInput}
        name='pass'
        type='password'
        placeholder='Pass'
      />
      <Input
        value={formInputs.repeatPass}
        onChange={handleInput}
        name='repeatPass'
        type='password'
        placeholder='RepeatPass'
      />
      <Button type='submit'>Register</Button>
    </Form>
  );
}

export default RegisterForm;
