import UserMenu from 'components/UserMenu/UserMenu';
// import { NavLink } from 'react-router-dom';
import { NavigationLink } from './HeaderStyled';
import { useGetUserQuery } from 'redux/API';
import CssBaseline from '@mui/material/CssBaseline';
import { List } from './HeaderStyled';
import Box from '@mui/material/Box';

export default function Header() {
  const { data } = useGetUserQuery();

  return (
    <>
      <Box component="header" backgroundColor="#1976d2">
        {!data ? (
          <nav>
            <List>
              <CssBaseline />
              <NavigationLink to="/authorization">
                <li>Log in</li>
              </NavigationLink>
              <NavigationLink to="/registration">
                <li>Registration</li>
              </NavigationLink>
            </List>
          </nav>
        ) : (
          <UserMenu data={data} />
        )}
      </Box>
    </>
  );
}
