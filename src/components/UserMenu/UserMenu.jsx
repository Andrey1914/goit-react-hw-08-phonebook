import { useLogOutUserMutation } from 'redux/API';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { contactsApi } from 'redux/API';

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
    <div>
      <span>{`Привіт, ${data?.name}!`}</span>
      <button type="button" onClick={logOutUser}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
