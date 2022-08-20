import React, { useState } from "react"
import { useDispatch } from 'react-redux';
import * as Icon from 'react-bootstrap-icons';
import { connect } from "react-redux"
import { removePhonebook, resendPhonebook, updatePhonebook } from "../features/phonebook/phonebookSlice";

export default function PhonebookItem (props) {

    const dispatch = useDispatch();

    const [isEdit, setIsEdit] = useState(false)
    const [phonebook, setPhonebook] = useState({
        name: props.phonebook.name,
        phone: props.phonebook.phone
    })

    const handleInputChange = (event) => {
        const target = event.target
        const value = target.value;
        const name = target.name;

        setPhonebook({
            ...phonebook,
            [name]: value
        })
    }

    const handleUpdate = () => {
        dispatch(updatePhonebook({ id: props.phonebook.id, ...phonebook}))
        setIsEdit(false)
    }

    if (isEdit) {
        return (
            <tr>
                <td>{props.no}</td>
                <td>
                    <input type="text" name="name" value={phonebook.name} className="form-control" onChange={handleInputChange} />
                </td>
                <td>
                <input type="number" name="phone" value={phonebook.phone} className="form-control" onChange={handleInputChange} />
                </td>
                <td>
                    <button type="button" className='btn btn-primary' onClick={handleUpdate}>save</button>
                    <button type="button" className='btn btn-warning' onClick={() => setIsEdit(false)}>cancel</button>
                </td>
            </tr >
        )
    } else {
        <tr>
        <td>{props.no}</td>
        <td>{props.phonebook.name}</td>
        <td>{props.phonebook.phone}</td>
        <td>
            <button type="button" className="btn btn-success" onClick={() => setIsEdit(true)}>edit</button>
            <button
                type="button"
                className={props.phonebook.sent ? 'btn btn-danger' : 'btn btn-warning'}
                onClick={props.phonebook.sent ? () => dispatch(removePhonebook(props.phonebook.id)) : () => dispatch(resendPhonebook(props.phonebook))}>
                {props.phonebook.sent ? 'hapus' : 'kirim ulang'}
            </button>
        </td>
    </tr >
    }
}