import axios from 'axios';
import {
    addContactSuccess,
    addContactError, 
    addContactRequest, 
    deleteContactRequest, 
    deleteContactError, 
    deleteContactSuccess, 
    fetchContactRequest, 
    fetchContactError, 
    fetchContactSuccess} from './contacts-actions'

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContact = () => dispatch => {
    dispatch(fetchContactRequest())

    axios.get('/contacts').then(({data}) => dispatch(fetchContactSuccess(data))).catch(error => dispatch(fetchContactError(error))) 
}

export const addContact = (name, number) => dispatch => {
    const item = {name, number };

    dispatch(addContactRequest())

    axios.post('/contacts', item)
    .then(({data}) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error))) 
}


export const deleteContact = (id) => dispatch => {

    dispatch(deleteContactRequest())

    axios.delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error =>  dispatch(deleteContactError(error)))

}


