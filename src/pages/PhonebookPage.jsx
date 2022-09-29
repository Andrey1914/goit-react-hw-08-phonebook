import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useGetContactsQuery, useAddContactsMutation } from 'redux/API';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

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
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmit} />
        <h2>Contact</h2>
        <Filter />
        {data && <ContactList />}
      </Box>
    </Container>
  );
}
