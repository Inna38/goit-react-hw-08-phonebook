import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts.thunk';
import { Home } from 'pages/Home/Home';

import css from "./Contacts.module.css"

const Contacts = () => {
  const contact = useSelector(state => state.contacts.contacts);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
  const token = useSelector(state => state.loginUser.user.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(fetchContacts());
    }
  }, [dispatch, token]);

  return (
    <div>
      {token ? (
        <div className={css.container}>
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
          {contact.length > 0 ? <Filter /> : <h3>No contact</h3>}

          {isLoading && <h3>Loading...</h3>}
          {error && <h3> Error...</h3>}

          <ContactList />
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
};

export default Contacts;
