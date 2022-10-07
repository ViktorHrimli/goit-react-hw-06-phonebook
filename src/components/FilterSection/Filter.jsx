import { ListInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const valueFilter = useSelector(state => state.filterContact);

  const handlechange = query => {
    dispatch(filterContact(query.target.value.toLowerCase().trim()));
  };

  return <ListInput type="text" value={valueFilter} onChange={handlechange} />;
};
