// import React, { Component } from 'react';
import {useState} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { toast } from  'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Input from './Input/Input';
import {addContact} from '../../redux/contacts-operation'
import { getItems } from '../../redux/contacts-selectors';


export default function ContactForm() {

    const contacts = useSelector((state) => getItems(state));
    const dispatch = useDispatch();

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    function handleNameChange (e) {
        const value = e.target.value;
        setName(value);
    }

    function handleNamberChange (e) {
        const value = e.target.value;
        setNumber(value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (name.trim() === '' || number.trim() === '') {
            toast.error('Заполните поле');
            return
        }

        const normalizedName = name.toLowerCase();
        const hasContact = contacts.find(({name}) => name.toLowerCase() === normalizedName);
        
        if(hasContact) {
            toast.error(`Контакт с именем ${name} уже существует`)
            return
        }

        dispatch(addContact(name, number))
        reset();
    }

    function reset () {
        setName('');
        setNumber('');
    }

    return (
        <form key='AddContactForm' onSubmit={handleSubmit} autoComplete="off">
            <Input label="Name" type="text" name="name" value={name} onChange={handleNameChange} />
            <Input label="Number" type="text" name="number" value={number} onChange={handleNamberChange} />
            <button type='submit'  children='Add contact'></button>
        </form>
    )
}
