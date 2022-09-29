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
      p="20px"
      display="flex"
      gap="20px"
      justifyContent="flex-end"
      alignItems="center"
    >
      <Greeting>{`Привіт, ${data?.name}!`}</Greeting>
      <Button type="button" onClick={logOutUser} variant="contained">
        {/* Log out */}
        <IoIosLogOut size={24} />
      </Button>
    </Box>
  );
};

export default UserMenu;
