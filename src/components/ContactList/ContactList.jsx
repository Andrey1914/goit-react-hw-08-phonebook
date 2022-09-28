import * as React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import { filterContacts } from 'redux/selectors';
import { useDeleteContactMutation, useGetContactsQuery } from 'redux/API';

const ContactList = () => {
  const { data: allContacts } = useGetContactsQuery();
  const contacts = useSelector(state => filterContacts(state, allContacts));
  const [deleteContact] = useDeleteContactMutation();

  return (
    <>
      {contacts?.length === 0 ? (
        'Phone book is empty'
      ) : (
        <ul>
          {contacts?.map(({ name, number, id }) => (
            <li key={id}>
              <p>
                {name}: <span>{number}</span>
                <IconButton
                  aria-label="delete"
                  id={id}
                  onClick={() => deleteContact(id)}
                >
                  <DeleteIcon />
                </IconButton>
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
