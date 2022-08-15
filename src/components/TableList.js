import React, { Component } from "react"
import ListEdit from "./ListEdit"
import ListRows from "./ListRows"
import { connect } from "react-redux"
import { loadPhonebook } from '../actions/phonebooks'


export default class TableList extends Component {

    componentDidMount(){
        // this.props.load()
    }
    render() {
        const rows = [].map(item => {
            <ListRows 
                name={item.name}
                phone={item.phone}
                 />
        })
        // const editRows = this.props.phonebooks.map(item => {
        //     <ListEdit 
        //         name={item.name}
        //         phone={item.phone}
        //          />
        // })
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
                    {rows}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => ({ phonebooks: state.phonebooks })

const mapDispatchToProps = (dispatch, ownProps) => ({
    load: () => dispatch(loadPhonebook())
})

// export default connect(mapStateToProps, mapDispatchToProps)(TableList)