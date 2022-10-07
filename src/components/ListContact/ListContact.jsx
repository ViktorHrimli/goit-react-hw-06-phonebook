import { ItemList, ItemListButton, ItemListParagr } from './ListContact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

export const Renderlist = () => {
  const dispatch = useDispatch();
  const handleClickRemove = id => dispatch(removeContact(id));

  const renderContact = useSelector(state =>
    state.contacts.filter(item =>
      item.name.toLowerCase().includes(state.filterContact)
    )
  );

  return (
    renderContact.length > 0 &&
    renderContact.map(item => {
      return (
        <ItemList key={item.id}>
          <ItemListParagr>
            {item.name} {item.number}
          </ItemListParagr>
          <ItemListButton
            type="button"
            onClick={() => handleClickRemove(item.id)}
          >
            Delete
          </ItemListButton>
        </ItemList>
      );
    })
  );
};
