import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts.thunk';

const Contacts = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>

      <Filter />

      {isLoading && <h3>Loading...</h3>}
      {error && <h3> Error...</h3>}

      <ContactList />
    </div>
  );
};

export default Contacts;
