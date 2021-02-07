import PropTypes from 'prop-types';

export default function Contact({ contact, onDelete }) {

        return (
            <li>
                <p>{contact.name} {contact.number}</p> 
                <button id={contact.id} onClick={onDelete}>Delete</button>
            </li>          
        )   
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
}