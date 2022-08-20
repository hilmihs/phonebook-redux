import { render } from "@testing-library/react"
import React from "react"
import Header from "../../components/Header"
import SearchForm from "../../containers/SearchForm"
import TableList from "../../containers/TableList"
import PhonebookForm from "../../containers/PhonebookForm"
import PhonebookItem from "../../containers/PhonebookItem"
export default function Layout (props) {
   
        return (
            
            <React.Fragment>
                <div className="layout">
                <Header />
                <PhonebookForm />
                <SearchForm />
                <PhonebookItem/>
                </div>
            </React.Fragment>
        )
    }
