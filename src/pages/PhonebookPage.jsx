import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useGetContactsQuery, useAddContactsMutation } from 'redux/API';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import background from '../components/images/bg-img3.jpg';
import { Image } from './PhonebookPageStyled';

export default function PhonebookPage() {
  const { data } = useGetContactsQuery();
  const [createContact] = useAddContactsMutation();
  const formSubmit = contact => {
    if (data.some(({ name }) => name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    createContact(contact);
  };

  return (
    <>
      <Image style={{ backgroundImage: `url(${background})` }}>
        <Container maxWidth="xs">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box component="h1" color="#1976d2" paddingTop={4}>
              Phonebook
            </Box>
            <ContactForm onSubmit={formSubmit} />

            <Box component="h2" color="#1976d2" sx={{ marginTop: 3 }}>
              Contacts
            </Box>
            <Filter />
            {data && <ContactList />}
          </Box>
        </Container>
      </Image>
    </>
  );
}
