import axios from "axios";
import * as actions from '../constants'
import { v4 as uuidv4 } from 'uuid';

const request = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 10000
})

const loadPhonebookFailure = () => ({
    type: actions.ADD_PHONEBOOK_FAILURE
})

const loadPhonebookSuccess = phonebooks => ({
    type: actions.LOAD_PHONEBOOK_SUCCESS,
    phonebooks
})

export const loadPhonebook = () => (dispatch) => {
    return request.get('phonebooks').then(response => {
       dispatch(loadPhonebookSuccess(response.data))
    }).catch(err =>{
       dispatch(loadPhonebookFailure())
    })
}

const addPhonebookFailure = (name) => ({
    type: actions.ADD_PHONEBOOK_FAILURE,
    name
})

const addPhonebookSuccess = (oldId, phonebook) => ({
    type: actions.ADD_PHONEBOOK_SUCCESS,
    phonebook,
    oldId
})

const addDrawPhonebook = ( name, phone) => ({
    type: actions.ADD_DRAW_PHONEBOOK,
   name, phone
})

export const addPhonebook = (name, phone) => (dispatch) => {
    // const id = uuidv4() // kalau error maka kita gak usah masuk id karena udah auto increment
    dispatch(addDrawPhonebook( name, phone))
    return request.post('phonebooks',{ name, phone}).then(response => {
       dispatch(addPhonebookSuccess(id, response.data))
    }).catch(err =>{
       dispatch(addPhonebookFailure(name))
    })
}

const editPhonebookFailure = (id) => ({
    type: actions.EDIT_PHONEBOOK_FAILURE,
    id
})

const editPhonebookSuccess = phonebook => ({
    type: actions.EDIT_PHONEBOOK_SUCCESS,
    phonebook
})

const editDrawPhonebook = ( name, phone) => ({
    type: actions.EDIT_DRAW_PHONEBOOK,
   name, phone
})

export const editPhonebook = (id, name, phone) => (dispatch) => {
    // const id = uuidv4() // kalau error maka kita gak usah masuk id karena udah auto increment
    dispatch(editDrawPhonebook(id, name, phone))
    return request.put(`phonebooks/${id}`,{ name, phone}).then(response => {
       dispatch(editPhonebookSuccess(response.data))
    }).catch(err =>{
       dispatch(editPhonebookFailure(id))
    })
}

const resendPhonebookFailure = (name) => ({
    type: actions.RESEND_PHONEBOOK_FAILURE
})

const resendPhonebookSuccess = (oldId, newId) => ({
    type: actions.RESEND_PHONEBOOK_SUCCESS,
    oldId, newId
})

export const resendPhonebook = (id, name, title) => (dispatch) => {
    return request.post('phonebooks',{ name, phone}).then(response => {
        dispatch(addPhonebookSuccess(id, response.id))
     }).catch(err =>{
        dispatch(addPhonebookFailure(name))
     })
}

const removePhonebookFailure = (name) => ({
    type: actions.REMOVE_PHONEBOOK_FAILURE
})

const removePhonebookSuccess = id => ({
    type: actions.REMOVE_PHONEBOOK_SUCCESS,
    id
})

export const removePhonebook = (id) => (dispatch) => {
    return request.delete(`phonebooks/${id}`).then(response => {
       dispatch(removePhonebookSuccess(response.id))
    }).catch(err =>{
       dispatch(removePhonebookFailure(id))
    })
}