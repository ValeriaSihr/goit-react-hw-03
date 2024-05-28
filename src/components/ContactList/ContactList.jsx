import css from './ContactList'
import Contact from "./Contact/Contact";


const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contacts}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={() => onDeleteContact(contact.id)} />
      ))}
    </ul>
  );
};

export default ContactList;