import { ItemList, ItemListButton, ItemListParagr } from './ListContact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/actions';

export const Renderlist = () => {
  const dispatch = useDispatch();
  const handleClickRemove = id => dispatch(removeContact(id));

  const renderContact = useSelector(state =>
    state.contacts.contact.filter(item =>
      item.name.toLowerCase().includes(state.filterContact.filter)
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
