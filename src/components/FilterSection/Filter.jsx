import { ListInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/actions';

export const Filter = () => {
  const dispatch = useDispatch();
  const valueFilter = useSelector(state => state.contacts.filter);

  const handlechange = query => {
    console.log(query.target.value.toLowerCase());
    dispatch(filterContact(query.target.value.toLowerCase()));
  };

  return <ListInput type="text" value={valueFilter} onChange={handlechange} />;
};
