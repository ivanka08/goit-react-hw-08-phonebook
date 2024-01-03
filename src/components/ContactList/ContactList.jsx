
import { Contact } from "./Contact/Contact";
import { useSelector } from "react-redux";
import { selectAllContacts, selectFilter } from "../../redux/contacts/selectors";

import css from '../ContactList/ContactList.module.css';



export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);


  const filterContacts = () => {
    if (!filter) {
      return contacts;
    }


    const normalizedValue = filter.toLowerCase();
    const filteredContactsArray = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue));
  
    return filteredContactsArray;
  }

  const filteredContacts = filterContacts();

  return <ul className="">
    {filteredContacts.length > 0 ? filteredContacts.map((contact =>
      <Contact key={contact.id} contact={contact}/>
    )) : <p className={css.message}> no contacts <span className={css.smile}>☹</span></p>}
  </ul> 
}



// {/* <ProgressBar
//   height="80"
//   width="80"
//   ariaLabel="progress-bar-loading"
//   wrapperStyle={{}}
//   wrapperClass="progress-bar-wrapper"
//   borderColor = '#000000'
//   barColor = '#F033F3'
// /> */}