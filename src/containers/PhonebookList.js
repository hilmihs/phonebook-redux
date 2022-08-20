import React, { Component, useEffect } from "react"
import ListEdit from "./ListEdit"
import { connect, useDispatch, useSelector } from "react-redux"
import { readPhonebook, selectPhonebooks } from "../features/phonebook/phonebookSlice"
import PhonebookItem from "./PhonebookItem"

export default function PhonebookList() {
    const phonebooks = useSelector(selectPhonebooks)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(readPhonebook())

    }, [dispatch])

    return (
        <table id="tabel_masuk" className="table table-hover table-striped table-list" >
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nama</th>
                <th scope="col">Phone</th>
                <th scope="col" colspan="2">Actions</th>

            </tr>
        </thead>
        <tbody>
            {phonebooks.map((item, index) => <PhonebookItem 
            key={item.id}
            phonebook={item}
            no={index + 1}
            />)}
        </tbody>
    </table>
    )
}

