import UserMenu from 'components/UserMenu/UserMenu';
import { NavigationLink, Title } from './HeaderStyled';
import { useGetUserQuery } from 'redux/API';

import { List, HeaderElem } from './HeaderStyled';
import Box from '@mui/material/Box';
// import { RiContactsBook2Fill } from 'react-icons/ri';

export default function Header() {
  const { data } = useGetUserQuery();

  return (
    <>
      <HeaderElem>
        {!data ? (
          <Box
            width="1280px"
            mx="auto"
            p="15px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Title>
              Phonebook
              {/* Phonebook <RiContactsBook2Fill size={32} /> */}
            </Title>
            <nav>
              <List>
                <NavigationLink to="/authorization">
                  <li>Login</li>
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
      </HeaderElem>
    </>
  );
}
