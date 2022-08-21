
import React from "react"
import Header from "../../components/Header"
import SearchForm from "../../containers/SearchForm"
import PhonebookForm from "../../containers/PhonebookForm"
import PhonebookList from "../../containers/PhonebookList"
export default function Layout (props) {
   
        return (
            
            <React.Fragment>
                <div className="layout">
                <Header />
                <PhonebookForm />
                <SearchForm />
                <PhonebookList/>
                </div>
            </React.Fragment>
        )
    }
