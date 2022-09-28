import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useGetContactsQuery, useAddContactsMutation } from 'redux/API';

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
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmit} />
      <h2>Contact</h2>
      <Filter />
      {data && <ContactList />}
    </div>
  );
}
