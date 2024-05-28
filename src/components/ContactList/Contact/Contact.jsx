import css from './Contact.module.css'

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={css.contactItem}>
      <p>{contact.name}: {contact.number}</p>
      <button className={css.delContact} onClick={onDelete}>Del</button>
    </li>
  );
};

export default Contact;




