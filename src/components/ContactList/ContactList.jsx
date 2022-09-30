import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
        <Box width="100%" sx={{ mb: 2 }}>
          <Box
            as="ul"
            display="flex"
            flexDirection="column"
            width="100%"
            sx={{ m: 0, p: 0, gap: 2 }}
          >
            {contacts?.map(({ name, number, id }) => (
              <Box
                key={id}
                as="li"
                display="flex"
                alignItems="center"
                borderRadius="4px"
                boxShadow="0px 3px 5px 1px rgba(45, 90, 124, 0.2)"
                sx={{ m: 0, p: 1 }}
              >
                <Box
                  as="p"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderRadius="4px"
                  width="100%"
                  sx={{ m: 0, pl: 1, gap: 2 }}
                >
                  {name}: <span>{number}</span>
                </Box>
                <Button
                  aria-label="delete"
                  id={id}
                  onClick={() => deleteContact(id)}
                  variant="outlined"
                  width="32px"
                  sx={{ ml: 3 }}
                >
                  <DeleteIcon />
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};

export default ContactList;
