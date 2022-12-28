import { useLogOutUserMutation } from 'redux/API';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { contactsApi } from 'redux/API';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Greeting } from './UserMenuStyled';
import { IoIosLogOut } from 'react-icons/io';

const UserMenu = ({ data }) => {
  const [logOut] = useLogOutUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOutUser = event => {
    event.preventDefault();
    logOut().then(() => {
      navigateToUser();
    });
  };

  const navigateToUser = () => {
    dispatch(contactsApi.util.resetApiState());
    navigate('/registration');
  };

  return (
    <Box
      width="1280px"
      p="15px"
      mx="auto"
      display="flex"
      gap="20px"
      justifyContent="flex-end"
      alignItems="center"
    >
      <Greeting>{`Hello, ${data?.email}!`}</Greeting>
      <Button type="button" onClick={logOutUser} variant="outlined">
        <IoIosLogOut size={24} />
      </Button>
    </Box>
  );
};

export default UserMenu;
