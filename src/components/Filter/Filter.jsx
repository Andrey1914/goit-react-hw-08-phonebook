import { useDispatch, useSelector } from 'react-redux';
import { filterSelector } from 'redux/selectors';
import { filterContact } from 'redux/actions';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => filterSelector(state));

  const changeFilter = event => {
    const inputValue = event.currentTarget.value;
    dispatch(filterContact(inputValue));
  };

  return (
    <Box component="form" noValidate width="100%" sx={{ mb: 1 }}>
      <label>
        <TextField
          type="text"
          label="Find contacts by name"
          value={filter}
          onChange={changeFilter}
          margin="normal"
          fullWidth
        />
      </label>
    </Box>
  );
};

export default Filter;
