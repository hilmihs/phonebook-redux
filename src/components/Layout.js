import { render } from "@testing-library/react"
import React from "react"
import Header from "./Header"
import AddButton from "./AddButton"
import AddForm from "../containers/AddForm"
import SearchForm from "../containers/SearchForm"
import TableList from "../containers/TableList"
export default function Layout (props) {
   
        return (
            
            <React.Fragment>
                <div className="layout">
                <Header />
                {!this.state.showAddForm && <AddButton toggle={this.toggleAddForm} />}
                {this.state.showAddForm && <AddForm  />}
                <SearchForm />
                <TableList />
                </div>
            </React.Fragment>
        )
    }
