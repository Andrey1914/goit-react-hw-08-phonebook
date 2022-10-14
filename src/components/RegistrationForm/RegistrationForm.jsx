import { useState } from 'react';
import { useAuthorizeUserMutation, useAddUserMutation } from 'redux/API';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import background from '../images/bg-img3.jpg';
import { Image } from '../../pages/PhonebookPageStyled';

const RegistrationForm = ({ flag }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authorizeUser] = useAuthorizeUserMutation();
  const [registerUser] = useAddUserMutation();
  const navigate = useNavigate();

  const handleChangeInput = event => {
    const { name: inputName, value } = event.currentTarget;
    const inputNameSetterMap = {
      name: setName,
      email: setEmail,
      password: setPassword,
    };

    inputNameSetterMap[inputName](value);
  };

  const reset = () => {
    if (flag) {
      setName('');
    }
    setEmail('');
    setPassword('');
  };

  const user = {
    name,
    email,
    password,
  };

  const navigateToContacts = () => {
    navigate('/contacts');

    reset();
  };

  const onRegister = event => {
    event.preventDefault();
    registerUser(user)
      .unwrap()
      .then(() => navigateToContacts())
      .catch(() => toast.error('User with such email already exist.'));
  };

  const onLogin = event => {
    event.preventDefault();
    authorizeUser(user)
      .unwrap()
      .then(() => navigateToContacts())
      .catch(() => toast.error('Sorry, user not found'));
  };

  return (
    <>
      <Image style={{ backgroundImage: `url(${background})` }}>
        <Container maxWidth="xs">
          <Box
            sx={{
              // marginTop: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              component="p"
              color="#1976d2"
              fontSize="18px"
              fontWeight="500"
              marginTop={4}
            >
              Please, register or log in to your account.
            </Box>
            <Box
              component="form"
              onSubmit={flag ? onRegister : onLogin}
              noValidate
              sx={{ mt: 1 }}
            >
              {flag ? (
                <label>
                  <TextField
                    type="text"
                    name="name"
                    label="Name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleChangeInput}
                    margin="normal"
                    fullWidth
                  />
                </label>
              ) : (
                ''
              )}
              <label>
                <TextField
                  type="mail"
                  name="email"
                  label="Email"
                  value={email}
                  required
                  onChange={handleChangeInput}
                  margin="normal"
                  fullWidth
                />
              </label>
              <label>
                <TextField
                  type="password"
                  name="password"
                  label="Password"
                  value={password}
                  required
                  onChange={handleChangeInput}
                  margin="normal"
                  fullWidth
                />
              </label>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {flag ? 'Registration' : 'LogIn'}
              </Button>
            </Box>
            <Toaster />
          </Box>
        </Container>
      </Image>
    </>
  );
};

export default RegistrationForm;
