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
        this.state = { 
            data: [],
            showAddForm: false,
            showEditForm: false
         }
    }
    componentDidMount() {
        // fetch('http://localhost:3000/api/phonebooks')
        //     .then((response) => response.json())
        //     .then((data) =>{
        //         this.setState({
        //             data: data.map(item => {
        //                 item.sent = true 
        //                 return true
        //             })
        //         })
        //     })
    }
    componentDidUpdate() {
        fetch('http://localhost:3000/api/phonebooks')
            .then((response) => response.json())
            .then((data) =>{
                this.setState({
                    data: data.map(item => {
                        item.sent = true 
                        return true
                    })
                })
            })
    }
    addContact = (name, phone) => {
        this.setState(state => ({ data: [...state.data, {name, phone}] }))
        fetch('http://localhost:3000/api/phonebooks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, phone})
        }).then((response) => response.json())
            .then((data) => {
                this.setState(state => ({
                    data: state.data.map((item) => {
                        return item
                    })
                }))
            }).catch((e) => {
                console.log(e, `gagal add`)
            })     
    }
    editContact = (id, name, phone) => {    
        fetch(`http://localhost:3000/api/phonebooks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id, name, phone})
         }).then((response) => response.json())
          .then((data) => {
            this.setState(state => ({
              data: state.data.map((item) => {
                return item
            })
        }))
    }).catch((e) => {
        console.log(e, `gagal add`)
    })
    }     

    
    removeContact = (id) => {    
        fetch(`http://localhost:3000/api/phonebooks/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
            .then((data) => {
            });

    }     

    searchContact = (params) => {
        fetch(`http://localhost:3000/api/phonebooks?${new URLSearchParams(params).toString()}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({params})
        }).then((response) => response.json())
            .then((data) => {
                this.setState(state => ({
                    data: state.data.map((item) => {
                        return item
                    })
                }))
            }).catch((e) => {
                console.log(e, `gagal add`)
            })     
    }

    toggleAddForm = () => {
        this.setState( state => ({
            showAddForm: !state.showAddForm
        }) )
    }

    toggleEditForm = () => {
        this.setState( state => ({
            showEditForm: !state.showEditForm
        }) )
    }

    render() {
        console.log(this.state.showAddForm)
        return (
            
            <React.Fragment>
                <div className="layout">
                <Header />
                {!this.state.showAddForm && <AddButton toggle={this.toggleAddForm} />}
                {this.state.showAddForm && <AddForm toggle={this.toggleAddForm} add={this.addContact} />}
                <SearchForm search={this.searchContact}/>
                <TableList data={this.state.data} edittoggle={this.toggleEditForm} edit={this.editContact} remove={this.removeContact} />
                </div>
            </React.Fragment>
        )
    }
}