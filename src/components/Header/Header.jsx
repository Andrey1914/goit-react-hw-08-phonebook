import UserMenu from 'components/UserMenu/UserMenu';
import { NavigationLink, Title } from './HeaderStyled';
import { useGetUserQuery } from 'redux/API';

import { List } from './HeaderStyled';
import Box from '@mui/material/Box';
import { RiContactsBook2Fill } from 'react-icons/ri';

export default function Header() {
  const { data } = useGetUserQuery();

  return (
    <>
      <Box component="header" backgroundColor="#1976d2">
        {!data ? (
          <Box
            p="20px"
            pr="40px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Title>
              Phonebook <RiContactsBook2Fill size={32} />
            </Title>
            <nav>
              <List>
                <NavigationLink to="/authorization">
                  <li>Log in</li>
                </NavigationLink>
                <NavigationLink to="/registration">
                  <li>Registration</li>
                </NavigationLink>
              </List>
            </nav>
          </Box>
        ) : (
          <UserMenu data={data} />
        )}
      </Box>
    </>
  );
}
