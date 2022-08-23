import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { readPhonebook, selectPhonebooks } from "../features/phonebook/phonebookSlice"
import PhonebookItem from "./PhonebookItem"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'
import load from '../../src/loading.gif'
library.add(faSort, faSortUp, faSortDown)
export default function PhonebookList() {

    let params = {
        limit: 3
    }

    let phonebooks = useSelector(selectPhonebooks)

    const dispatch = useDispatch()

    const [phonebook, setPhonebook] = useState({
        name: '',
        phone: ''
    })

    const [sortBy, setSortBy] = useState({
        name: '',
        phone: ''
    })

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(3)

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setPhonebook({
            ...phonebook,
            [name]: value
        });
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll); // attaching scroll event listener

    }, []);




    useEffect(() => {
        params = {
            ...params,
            name: phonebook.name,
            phone: phonebook.phone,
            sortName: sortBy.name,
            sortPhone: sortBy.phone,
            limit: data
        }
        setTimeout(() => {
            dispatch(readPhonebook(params))
        }, 1000)
        
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [dispatch, sortBy, phonebook, data])

    const handleClickName = () => {
        setSortBy({
            name: sortBy.name === '' ? 'ASC' :
                sortBy.name === 'ASC' ? 'DESC' :
                    sortBy.name === 'DESC' ? 'ASC' : 'DESC', phone: ''
        })
    }

    const handleClickPhone = () => {
        setSortBy({
            phone: sortBy.phone === '' ? 'ASC' :
                sortBy.phone === 'ASC' ? 'DESC' :
                    sortBy.phone === 'DESC' ? 'ASC' : 'DESC', name: ''
        })
    }

    const handleScroll = (e) => {
        let userScrollHeight = window.innerHeight + window.scrollY;
        let windowBottomHeight = document.documentElement.offsetHeight;
        if (userScrollHeight + 1 >= windowBottomHeight) {
            setIsLoading(true)
            setData(data => data + 3)
            
        }
    };

    console.log(isLoading)


    return (
        <div >
            <div className="card card-shadow ">
                <div className="card-header card-position">
                    Search Form
                </div>
                <div className="card-body card-position">
                    <label className="name-label" htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" className="form-control name-input" value={phonebook.name} onChange={handleInputChange} placeholder="name" />
                    <label className="name-label" htmlFor="phone">Phone</label>
                    <input type="text" id="phone" name="phone" className="form-control name-input" value={phonebook.phone} onChange={handleInputChange} placeholder="phone" />
                </div>
            </div>
            <table id="tabel_masuk" className="table table-hover table-striped table-list" onScroll={handleScroll}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nama<FontAwesomeIcon style={{ marginLeft: 10 }} onClick={handleClickName} icon={sortBy.name === 'ASC' ? "sort-up" : sortBy.name === 'DESC' ? "sort-down" : "sort"} /></th>
                        <th scope="col">Phone<FontAwesomeIcon style={{ marginLeft: 10 }} onClick={handleClickPhone} icon={sortBy.phone === 'ASC' ? "sort-up" : sortBy.phone === 'DESC' ? "sort-down" : "sort"} /></th>
                        <th scope="col" colSpan="2">Actions</th>

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
            <div className="image-container">  
                    { isLoading && <img style={{width: 25}} alt="loading icon" src={load}></img> }
            </div>
        </div>
    )
}

