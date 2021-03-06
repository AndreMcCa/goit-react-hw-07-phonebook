import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
    addContactSuccess, 
    addContactRequest, 
    addContactError, 
    deleteContactSuccess, 
    deleteContactError, 
    deleteContactRequest,
    fetchContactRequest, 
    fetchContactError, 
    fetchContactSuccess, 
    filterContact} from './contacts-actions';

const itemsReducer = createReducer([], {
    [fetchContactSuccess]: (_, action) => action.payload,
    [addContactSuccess]: (state, action) => [...state, action.payload],
    [deleteContactSuccess]: (state, action) => state.filter(contact => contact.id !== action.payload),
})

const filterReducer = createReducer('', {
    [filterContact]: (_, action) => action.payload
})

const loading = createReducer(false, 
    {
    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
});

export default combineReducers({
   items: itemsReducer,
   filter: filterReducer,
})

