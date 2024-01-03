import { ContactList } from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";

import css from './Contacts.module.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RiContactsBook2Fill } from 'react-icons/ri';
import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";


const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
  return <div className={css.container}>
    <div>
      <Filter/>
      <ContactForm />
      <ToastContainer autoClose={2000} hideProgressBar closeOnClick/>
    </div>
    <div>
      <h2 className={css.title}>
        Contacts
        <RiContactsBook2Fill className={css.icon} />
      </h2>
      <div>
      </div>
      <ContactList/>
    </div>
  </div>
}

export default Contacts;