import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from  'react-toastify';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from "./components/ContactForm/Input/Input";
import ContactList from "./components/ContactList/ContactList";

import {filterContact} from './redux/contacts-actions';
import {getFilter} from './redux/contacts-selectors'

export default function App(){

  const value = useSelector((state) => getFilter(state))
  const dispatch = useDispatch();

      return (
        <>
            <ContactForm />

            <h2>Contacts</h2>
            <Filter label="Find contacts by name" value={value} type="text" name="filter"  onChange={(e) => dispatch(filterContact(e.target.value))}/>

          <ContactList />
          <ToastContainer autoClose={2500}/>
        </>
    )
  }