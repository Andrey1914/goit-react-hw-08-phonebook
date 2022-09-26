import { useDispatch, useSelector } from 'react-redux';
import { filterSelector } from 'redux/selectors';
import { filterContact } from 'redux/actions';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => filterSelector(state));

  const changeFilter = event => {
    const inputValue = event.currentTarget.value;
    dispatch(filterContact(inputValue));
  };

  return (
    <form>
      <label>
        Find contacts by name
        <input type="text" value={filter} onChange={changeFilter} />
      </label>
    </form>
  );
};

export default Filter;
