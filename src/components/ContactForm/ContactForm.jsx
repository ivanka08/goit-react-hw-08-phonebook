
import css from "../ContactForm/ContactForm.module.css";

import { toast } from "react-toastify";


import { ColorRing } from 'react-loader-spinner';
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import { addContact } from "../../redux/contacts/operations";
import { selectAllContacts, selectLoading } from "../../redux/contacts/selectors";
import { useEffect, useState } from "react";

const ContactForm = () => {
  const [adding, setAdding] = useState(false);

  const dispatch = useDispatch();

  const contacts = useSelector(selectAllContacts);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    if (!isLoading) {
      setAdding(false);
    }
  }, [isLoading])

  const toggleForm = (evt) => {
    // console.log(evt.target);
    const btnRef = evt.target;
    const formRef = btnRef.nextSibling;
    // console.log(formRef);

    if (btnRef.textContent === "+") {
      btnRef.textContent = "x";
      formRef.classList.remove(`${css.visually_hidden}`)
    } else if (btnRef.textContent === "x") {
      btnRef.textContent = "+";
      formRef.classList.add(`${css.visually_hidden}`)
    }
  }


  const onAddContact = (evt) => {
    evt.preventDefault();
    const input = evt.target;
    const name = input.name.value.trim() ;
    const number = input.number.value.trim();
    

    const equalName = contacts.find(
      element => element.name.toLowerCase() === name.toLowerCase());

    if (equalName) {
      setAdding(false);
      toast.error(`${equalName.name} is already in contacts.`)
      return;
    }


    if (name && number !== '') {
      dispatch(addContact({ name, number }));
      toast.success("Contact added successfully");
      input.name.value = "";
      input.number.value = "";
      return;
    } 
    toast.warn("Contact cannot be empty. Enter some text!");
  }


  return <div className={css.container}>
      <button type="button" className={css.btn} onClick={toggleForm}>+</button>
       <form
        className={classNames(css.visually_hidden, css.form)}
        onSubmit={onAddContact}> 
        <label className={css.label}>
          Name
          <input className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></input>
        </label>
        <label className={css.label}>
          Number
          <input className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></input>
        </label>
      <button type="submit" className={classNames(css.btn, css.add)} onClick={() => setAdding(true)}>{adding ? <ColorRing
  visible={true}
  height="22"
  width="22"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={[]}
/> : 'Add contact'}</button>
      </form>
      </div>

}

export default ContactForm;

