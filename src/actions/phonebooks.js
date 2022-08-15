import axios from "axios";
import * as actions from '../constants'

const request = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 10000
})

const loadPhonebookFailure = () => ({
    type: actions.ADD_PHONEBOOK_FAILURE
})

const loadPhonebookSuccess = (data) => ({
    type: actions.LOAD_PHONEBOOK_SUCCESS,
    data
})

export const loadPhonebook = () => (dispatch) => {
    return request('phonebooks').then(response => {
       dispatch(loadPhonebookSuccess(response.data))
    }).catch(err =>{
       dispatch(loadPhonebookFailure())
    })
}