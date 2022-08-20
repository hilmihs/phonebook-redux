import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { createPhonebook } from "../features/phonebook/phonebookSlice";

export default function PhonebookForm() {

    const dispatch = useDispatch();
    
    const [isAdd, setIsAdd] = useState(false)
    const [phonebook, setPhonebook] = useState({
        name: props.phonebook.name,
        phone: props.phonebook.phone
    })

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setPhonebook({
            ...phonebook,
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createPhonebook(phonebook))
        setPhonebook('')
    }

    if (isAdd) {
     return (  <form onSubmit={handleSubmit}>

<div className="card card-shadow ">
                <div className="card-header card-position">
                    Adding Form
                </div>
                <div className="card-body card-position">
                    <label className="name-label" htmlFor="name">Name</label>
                    <input type="text" name="name" className="form-control name-input" value={phonebook.name} onChange={handleInputChange} placeholder="name" />
                        <label className="name-label" htmlFor="phone">Phone</label>
                        <input type="text" name="phone" className="form-control name-input" value={phonebook.phone} onChange={handleInputChange} placeholder="phone" />
                            <button type="submit" className="btn btn-success green-button">
                            <Icon.CheckCircle className='button-icon' />save
                             </button>
                            <button onClick={() => setIsAdd(false)} className="btn btn-primary orange-button">
                            <Icon.XCircle className='button-icon' />  
                             cancel</button>
                        </div>
                </div>
        </form> )
    } else {
        return (
            <button className="btn btn-primary add-button" onClick={() => setIsAdd(true)}>
                <FontAwesomeIcon icon='plus' /> add
            </button>
        )
    }
}