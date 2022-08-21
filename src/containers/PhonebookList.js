import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { readPhonebook, selectPhonebooks } from "../features/phonebook/phonebookSlice"
import PhonebookItem from "./PhonebookItem"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'
library.add(faSort, faSortUp, faSortDown)
export default function PhonebookList() {
    const phonebooks = useSelector(selectPhonebooks)
    const dispatch = useDispatch()
  
    const [sortBy, setSortBy] = useState({
        name: '',
        phone: ''
    })
    useEffect(() => {
        dispatch(readPhonebook())
       
    }, [dispatch])

    const handleClickName = () => {
        setSortBy({name: sortBy.name === '' ? 'on' :
         sortBy.name === 'on' ? 'off' :
          sortBy.name === 'off' ? 'on' : 'off', phone: ''})
    }

    const handleClickPhone = () => {
        setSortBy({phone: sortBy.phone === '' ? 'on' :
         sortBy.phone === 'on' ? 'off' :
          sortBy.phone === 'off' ? 'on' : 'off', name: ''})
    }
    return (
        <table id="tabel_masuk" className="table table-hover table-striped table-list" >
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nama<FontAwesomeIcon style={{marginLeft: 10}} onClick={handleClickName} icon={sortBy.name === 'on' ? "sort-up" : sortBy.name === 'off' ? "sort-down" : "sort"  }/></th>
                <th scope="col">Phone<FontAwesomeIcon style={{marginLeft: 10}} onClick={handleClickPhone} icon={sortBy.phone === 'on' ? "sort-up" : sortBy.phone === 'off' ? "sort-down" : "sort"  }/></th>
                <th scope="col" colspan="2">Actions</th>

            </tr>
        </thead>
        <tbody>
            {phonebooks.map((item, index) => <PhonebookItem 
            key={item.id}
            phonebook={item}
            no={index + 1}
            />
            
            )}
        </tbody>
    </table>
    )
}

