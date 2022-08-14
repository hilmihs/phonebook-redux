import { render } from "@testing-library/react"
import React, { Component } from "react"
import Header from "./Header"
import AddButton from "./AddButton"
import AddForm from "./AddForm"
import SearchForm from "./SearchForm"
import TableList from "./TableList"
export default class Layout extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <div className="layout">
                <Header />
                <AddButton />
                <AddForm />
                <SearchForm />
                <TableList />
                </div>
            </React.Fragment>
        )
    }
}