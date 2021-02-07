import {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux'

import Contact from "./Contact/Contact";
import { fetchContact, deleteContact} from '../../redux/contacts-operation';
import { getVisibleContacts } from '../../redux/contacts-selectors';

export default function ContactsList() {

    const dispatch = useDispatch();
    const contacts = useSelector(state => getVisibleContacts(state));

    useEffect(() => {
        dispatch(fetchContact())
    }, [])

    return (
        <ul>
            {contacts.map(contact => (<Contact key={contact.id} contact={contact} onDelete={() => dispatch(deleteContact(contact.id))}/>))}
      </ul>
    )
}
